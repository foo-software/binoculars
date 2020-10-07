import ArtifactsInterface from '../../../../interfaces/Artifacts';
import MeaningfulTextAudit from '../../../../audits/seo/meaningful-text';

describe('MeaningfulTextAudit', () => {
  describe('MeaningfulTextAudit.meta', () => {
    it('should match snapshot', () => {
      expect(MeaningfulTextAudit.meta).toMatchSnapshot();
    });
  });

  describe('MeaningfulTextAudit.audit', () => {
    let artifacts: ArtifactsInterface = {};

    beforeAll(() => {
      artifacts = {};
    });

    it('should return a passing score when sufficient text content exists', () => {
      artifacts.Elements = {
        body: [
          {
            text:
              'ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          },
        ],
      };
      const result = MeaningfulTextAudit.audit(artifacts);
      expect(result.score).toEqual(1);
    });

    it('should return a failing score when insufficient text content exists', () => {
      artifacts.Elements = {
        body: [
          {
            text: 'ipsum lorem',
          },
        ],
      };
      const result = MeaningfulTextAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when elements are non-existent', () => {
      const result = MeaningfulTextAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });
  });
});
