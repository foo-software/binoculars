import { runBinoculars } from '../helpers';
import { startServer, stopServer, PORT } from '../../integration-server';

const HOST = process.env.BINOCULARS_INTEGRATION_SERVER_DOMAIN || 'localhost';
const PROTOCOL = process.env.BINOCULARS_INTEGRATION_SERVER_PROTOCOL || 'http';
const ORIGIN = `${PROTOCOL}://${HOST}:${PORT}`;

describe('Audits', () => {
  beforeAll(async () => {
    await startServer();
  });

  afterAll(async () => {
    await stopServer();
  });

  describe('/ passing page', () => {
    it('binoculars', async () => {
      const { result }: any = await runBinoculars(ORIGIN);
      expect(result.categories.binocularsSeo.score).toBeGreaterThanOrEqual(1);
    });
  });
});
