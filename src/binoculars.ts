import fs from 'fs';
import path from 'path';
import getUpdatedReportContent from './helpers/getUpdatedReportContent';
import lighthousePersist from '@foo-software/lighthouse-persist';
import lighthouseConfig from './config/lighthouseConfig';
import lighthouseOptions from './config/lighthouseOptions';

export default async ({
  locale,
  url,
}: {
  locale: string | undefined | unknown;
  url: string | undefined | unknown;
}) => {
  console.log('Running Lighthouse...');

  const { localReport } = await lighthousePersist({
    config: lighthouseConfig(locale),
    options: lighthouseOptions,
    outputDirectory: './reports',
    url,
  });

  console.log('Lighthouse audit complete ✔️');

  console.log('Updating report...');

  const reportPath = path.resolve(localReport);
  let reportContent = fs.readFileSync(reportPath, 'utf8');
  reportContent = getUpdatedReportContent(reportContent);
  fs.writeFileSync(reportPath, reportContent);

  console.log('Report update complete ✔️');

  console.log('report path', reportPath);
};
