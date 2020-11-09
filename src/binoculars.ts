import BinocularsResultInterface from './interfaces/BinocularsResult';
import getUpdatedReportContent from './helpers/getUpdatedReportContent';
import lighthousePersist from '@foo-software/lighthouse-persist';
import lighthouseConfig from './config/lighthouseConfig';
import lighthouseOptions from './config/lighthouseOptions';
import logger from './helpers/logger';
import postComment from './helpers/postComment';
import slackNotify from './helpers/slackNotify';

export default async ({
  author,
  awsAccessKeyId,
  awsBucket,
  awsRegion,
  awsSecretAccessKey,
  branch,
  commentAccessToken,
  commentUrl,
  enableComments,
  locale,
  minScore,
  outputDirectory,
  pr,
  sha,
  slackWebhookUrl,
  url,
  urls,
}: {
  author?: string | undefined | unknown;
  awsAccessKeyId?: string | undefined | unknown;
  awsBucket?: string | undefined | unknown;
  awsRegion?: string | undefined | unknown;
  awsSecretAccessKey?: string | undefined | unknown;
  branch?: string | undefined | unknown;
  commentAccessToken?: string | undefined | unknown;
  commentUrl?: string | undefined | unknown;
  enableComments?: boolean | undefined | unknown;
  locale?: string | undefined | unknown;
  minScore?: number | undefined | unknown;
  outputDirectory?: string | undefined | unknown;
  pr?: string | undefined | unknown;
  sha?: string | undefined | unknown;
  slackWebhookUrl?: string | undefined | unknown;
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

  if (typeof slackWebhookUrl === 'string') {
    await slackNotify({
      author,
      branch,
      pr,
      results,
      sha,
      slackWebhookUrl,
    });
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
