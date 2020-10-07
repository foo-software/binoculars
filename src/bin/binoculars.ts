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
} = cli.flags;

const run = async () => {
  try {
    await binoculars({
      awsAccessKeyId,
      awsBucket,
      awsRegion,
      awsSecretAccessKey,
      locale,
      outputDirectory,
      url,
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  process.exit(0);
};

run();
