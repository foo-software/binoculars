import BinocularsResultInterface from './interfaces/BinocularsResult';
import getUpdatedReportContent from './helpers/getUpdatedReportContent';
import lighthousePersist from '@foo-software/lighthouse-persist';
import lighthouseConfig from './config/lighthouseConfig';
import lighthouseOptions from './config/lighthouseOptions';
import logger from './helpers/logger';
import postComment from './helpers/postComment';

export default async ({
  awsAccessKeyId,
  awsBucket,
  awsRegion,
  awsSecretAccessKey,
  commentAccessToken,
  commentUrl,
  enableComments,
  locale,
  minScore,
  outputDirectory,
  url,
  urls,
}: {
  awsAccessKeyId?: string | undefined | unknown;
  awsBucket?: string | undefined | unknown;
  awsRegion?: string | undefined | unknown;
  awsSecretAccessKey?: string | undefined | unknown;
  commentAccessToken?: string | undefined | unknown;
  commentUrl?: string | undefined | unknown;
  enableComments?: boolean | undefined | unknown;
  locale?: string | undefined | unknown;
  minScore?: number | undefined | unknown;
  outputDirectory?: string | undefined | unknown;
  url?: string | undefined | unknown;
  urls?: string[] | undefined | unknown;
}): Promise<BinocularsResultInterface[]> => {
  const queue = urls || [url];

  if (!Array.isArray(queue)) {
    throw Error('invalid URL input');
  }

  const results = [];

  for (const queuedUrl of queue) {
    logger.info(`running audit: ${queuedUrl}`);

    const { localReport, result, report } = await lighthousePersist({
      awsAccessKeyId,
      awsBucket,
      awsRegion,
      awsSecretAccessKey,
      config: lighthouseConfig(locale),
      options: lighthouseOptions,
      outputDirectory,
      updateReport: getUpdatedReportContent,
      url: queuedUrl,
    });

    const score = result?.categories?.binocularsSeo?.score;
    const scoreText =
      typeof score !== 'number' ? '' : ` with a score of ${score * 100}`;
    logger.info(`✔️ audit complete${scoreText}`);

    if (localReport) {
      logger.info(`local report path: ${localReport}`);
    }

    if (report) {
      logger.info(`report path: ${report}`);
    }

    results.push({
      localReport,
      result,
      report,
      url: queuedUrl,
    });
  }

  if (commentAccessToken && commentUrl && enableComments) {
    await postComment({
      commentAccessToken: `${commentAccessToken}`,
      commentUrl: `${commentUrl}`,
      results,
    });
    logger.info('✔️ comment posted');
  }

  if (typeof minScore === 'number') {
    const failedAudits = [];
    for (const result of results) {
      const score = result.result.categories.binocularsSeo.score * 100;
      if (score < minScore) {
        failedAudits.push({
          url: result.url,
          score,
        });
      }
    }

    if (failedAudits.length) {
      throw Error(
        `Minimum score requirement of ${minScore} failed. ${JSON.stringify(
          failedAudits,
        )}`,
      );
    }
  }

  return results;
};
