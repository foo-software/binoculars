#!/usr/bin/env node
import integrationServer, { PORT } from '../integration-server';
import logger from '../helpers/logger';

const run = async () => {
  try {
    await new Promise((resolve) =>
      integrationServer.listen(PORT, () => {
        logger.info(`listening on port ${PORT}`);
        resolve();
      }),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

run();
