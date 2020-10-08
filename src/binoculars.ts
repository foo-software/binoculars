import fs from 'fs';
import path from 'path';
import getUpdatedReportContent from './helpers/getUpdatedReportContent';
import lighthousePersist from '@foo-software/lighthouse-persist';
import lighthouseConfig from './config/lighthouseConfig';
import lighthouseOptions from './config/lighthouseOptions';
import logger from './helpers/logger';

export default async ({
  awsAccessKeyId,
  awsBucket,
  awsRegion,
  awsSecretAccessKey,
  locale,
  outputDirectory,
  url,
  urls,
}: {
  awsAccessKeyId?: string | undefined | unknown;
  awsBucket?: string | undefined | unknown;
  awsRegion?: string | undefined | unknown;
  awsSecretAccessKey?: string | undefined | unknown;
  locale?: string | undefined | unknown;
  outputDirectory?: string | undefined | unknown;
  url?: string | undefined | unknown;
  urls?: string[] | undefined | unknown;
}) => {
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
      url: queuedUrl,
    });

    const score = result?.categories?.binocularsSeo?.score;
    const scoreText =
      typeof score !== 'number' ? '' : ` with a score of ${score * 100}`;
    logger.info(`✔️ audit complete${scoreText}`);

    if (localReport) {
      const reportPath = path.resolve(localReport);
      let reportContent = fs.readFileSync(reportPath, 'utf8');
      reportContent = getUpdatedReportContent(reportContent);
      fs.writeFileSync(reportPath, reportContent);

      logger.info(`local report path: ${reportPath}`);
    }

    if (report) {
      logger.info(`report path: ${report}`);
    }

    results.push({
      localReport,
      result,
      report,
    });
  }

  return results;
};
