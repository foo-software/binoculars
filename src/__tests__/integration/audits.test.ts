import { runBinoculars } from '../helpers';
import { startServer, stopServer, ORIGIN } from '../../integration-server';

describe('audits', () => {
  beforeAll(async () => {
    await startServer();
  });

  afterAll(async () => {
    await stopServer();
  });

  describe('/', () => {
    it('should have a score of 100', async () => {
      const [{ result }]: any = await runBinoculars(ORIGIN);
      expect(result.categories.binocularsSeo.score).toBe(1);
    });
  });

  describe('/short-description', () => {
    it('should have a score of 93', async () => {
      const [{ result }]: any = await runBinoculars(
        `${ORIGIN}/short-description`,
      );
      expect(result.categories.binocularsSeo.score).toBe(0.93);
    });
  });

  describe('/short-title', () => {
    it('should have a score of 93', async () => {
      const [{ result }]: any = await runBinoculars(`${ORIGIN}/short-title`);
      expect(result.categories.binocularsSeo.score).toBe(0.93);
    });
  });

  describe('/no-h1', () => {
    it('should have a score of 95', async () => {
      const [{ result }]: any = await runBinoculars(`${ORIGIN}/no-h1`);
      expect(result.categories.binocularsSeo.score).toBe(0.95);
    });
  });

  describe('/missing-keywords', () => {
    it('should have a score of 93', async () => {
      const [{ result }]: any = await runBinoculars(
        `${ORIGIN}/missing-keywords`,
      );
      expect(result.categories.binocularsSeo.score).toBe(0.93);
    });
  });

  describe('/poor-tag-structure', () => {
    it('should have a score of 95', async () => {
      const [{ result }]: any = await runBinoculars(
        `${ORIGIN}/poor-tag-structure`,
      );
      expect(result.categories.binocularsSeo.score).toBe(0.95);
    });
  });

  describe('/no-text', () => {
    it('should have a score of 95', async () => {
      const [{ result }]: any = await runBinoculars(`${ORIGIN}/no-text`);
      expect(result.categories.binocularsSeo.score).toBe(0.95);
    });
  });

  describe('/fail-all', () => {
    it('should have a score of 66', async () => {
      const [{ result }]: any = await runBinoculars(`${ORIGIN}/fail-all`);
      expect(result.categories.binocularsSeo.score).toBe(0.66);
    });
  });
});
