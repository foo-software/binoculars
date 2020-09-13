#!/usr/bin/env node
import meow from 'meow';
import binoculars from '../binoculars';

const cli = meow();
const { url, locale } = cli.flags;

const run = async () => {
  try {
    await binoculars({
      locale,
      url,
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  process.exit(0);
};

run();
