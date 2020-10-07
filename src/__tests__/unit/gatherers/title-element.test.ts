import TitleElementGatherer from '../../../gatherers/title-element';

const mockEvaluateAsync = jest.fn(() =>
  Promise.resolve({
    text: null,
  }),
);

describe('TitleElementGatherer', () => {
  describe('TitleElementGatherer.afterPass()', () => {
    it('should evaluate correctly', async () => {
      const gatherer = new TitleElementGatherer();
      await gatherer.afterPass({
        driver: {
          evaluateAsync: mockEvaluateAsync,
        },
      });
      expect(mockEvaluateAsync.mock.calls.length).toBe(1);
    });
  });
});
