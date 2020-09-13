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

  const { localReport, result } = await lighthousePersist({
    config: lighthouseConfig(locale),
    options: lighthouseOptions,
    outputDirectory: './reports',
    url,
  });

  console.log('Lighthouse audit complete ✔️', result);

  console.log('report path', localReport);
};
