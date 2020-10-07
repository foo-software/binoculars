#!/usr/bin/env node
import { startServer } from '../integration-server';

const run = async () => {
  try {
    await startServer();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
