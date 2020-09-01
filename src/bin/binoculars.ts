#!/usr/bin/env node
import lighthousePersist from '@foo-software/lighthouse-persist';
import meow from 'meow';
import lighthouseConfig from '../config/lighthouseConfig';
import lighthouseOptions from '../config/lighthouseOptions';

const cli = meow();
const { url } = cli.flags;

const binoculars = async () => {
  try {
    console.log('Running Lighthouse...');

    const { localReport, result } = await lighthousePersist({
      config: lighthouseConfig,
      options: lighthouseOptions,
      outputDirectory: './reports',
      url,
    });

    console.log('Lighthouse audit complete ✔️', result);

    console.log('report path', localReport);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  process.exit(0);
};

binoculars();

export default binoculars;
