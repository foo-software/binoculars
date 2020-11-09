#!/usr/bin/env node
import meow from 'meow';
import binoculars from '../binoculars';

const cli = meow();
const {
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
} = cli.flags;

const run = async () => {
  try {
    const urlList = typeof urls !== 'string' ? undefined : urls.split('|');

    await binoculars({
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
      urls: urlList,
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  process.exit(0);
};

run();
