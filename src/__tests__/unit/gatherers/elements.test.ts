import ElementsGatherer from '../../../gatherers/elements';

const mockEvaluateAsync = jest.fn(() =>
  Promise.resolve({
    body: [],
    h1: [],
    h2: [],
    img: [],
    li: [],
    p: [],
    table: [],
  }),
);

describe('ElementsGatherer', () => {
  describe('ElementsGatherer.afterPass()', () => {
    it('should evaluate correctly', async () => {
      const gatherer = new ElementsGatherer();
      await gatherer.afterPass({
        driver: {
          evaluateAsync: mockEvaluateAsync,
        },
      });
      expect(mockEvaluateAsync.mock.calls.length).toBe(1);
    });
  });
});
