import fs from 'fs';
import path from 'path';
import getUpdatedReportContent from './helpers/getUpdatedReportContent';
import lighthousePersist from '@foo-software/lighthouse-persist';
import lighthouseConfig from './config/lighthouseConfig';
import lighthouseOptions from './config/lighthouseOptions';

export default async ({
  awsAccessKeyId,
  awsBucket,
  awsRegion,
  awsSecretAccessKey,
  locale,
  outputDirectory,
  url,
}: {
  awsAccessKeyId?: string | undefined | unknown;
  awsBucket?: string | undefined | unknown;
  awsRegion?: string | undefined | unknown;
  awsSecretAccessKey?: string | undefined | unknown;
  locale?: string | undefined | unknown;
  outputDirectory?: string | undefined | unknown;
  url: string | undefined | unknown;
}) => {
  console.log('Running Lighthouse...');

  const { localReport, result, report } = await lighthousePersist({
    awsAccessKeyId,
    awsBucket,
    awsRegion,
    awsSecretAccessKey,
    config: lighthouseConfig(locale),
    options: lighthouseOptions,
    outputDirectory,
    url,
  });

  console.log('Lighthouse audit complete ✔️');

  if (localReport) {
    const reportPath = path.resolve(localReport);
    let reportContent = fs.readFileSync(reportPath, 'utf8');
    reportContent = getUpdatedReportContent(reportContent);
    fs.writeFileSync(reportPath, reportContent);

    console.log('report path ✔️', reportPath);
  }

  return {
    localReport,
    result,
    report,
  };
};
