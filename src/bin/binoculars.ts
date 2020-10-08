#!/usr/bin/env node
import meow from 'meow';
import binoculars from '../binoculars';

const cli = meow();
const {
  awsAccessKeyId,
  awsBucket,
  awsRegion,
  awsSecretAccessKey,
  locale,
  outputDirectory,
  url,
  urls,
} = cli.flags;

const run = async () => {
  try {
    const urlList = typeof urls !== 'string' ? undefined : urls.split('|');

    await binoculars({
      awsAccessKeyId,
      awsBucket,
      awsRegion,
      awsSecretAccessKey,
      locale,
      outputDirectory,
      url,
      urls: urlList,
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  process.exit(0);
};

run();
