import binoculars from '../../binoculars';
import { startServer, stopServer, ORIGIN } from '../../integration-server';

jest.setTimeout(30000);

describe('binoculars', () => {
  beforeAll(async () => {
    await startServer();
  });

  afterAll(async () => {
    await stopServer();
  });

  it('should return results correctly for a single run', async () => {
    const [{ result }] = await binoculars({ url: ORIGIN });
    expect(result.categories.binocularsSeo.score).toBe(1);
  });

  it('should return results correctly for a batch run', async () => {
    const [{ result: result1 }, { result: result2 }] = await binoculars({
      urls: [ORIGIN, `${ORIGIN}/short-description`],
    });

    expect(result1.categories.binocularsSeo.score).toBe(1);
    expect(result2.categories.binocularsSeo.score).toBe(0.93);
  });
});
