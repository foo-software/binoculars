import ArtifactsInterface from '../../../../interfaces/Artifacts';
import MeaningfulTagStructureAudit from '../../../../audits/seo/meaningful-tag-structure';

describe('MeaningfulTagStructureAudit', () => {
  describe('MeaningfulTagStructureAudit.meta', () => {
    it('should match snapshot', () => {
      expect(MeaningfulTagStructureAudit.meta).toMatchSnapshot();
    });
  });

  describe('MeaningfulTagStructureAudit.audit', () => {
    let artifacts: ArtifactsInterface = {};

    beforeAll(() => {
      artifacts = {};
    });

    it('should return a passing score when sufficient different informational HTML tags exist', () => {
      artifacts.Elements = {
        img: [],
        li: [{ text: 'foo' }],
        p: [{ text: 'foo' }],
        table: [],
      };
      const result = MeaningfulTagStructureAudit.audit(artifacts);
      expect(result.score).toEqual(1);
    });

    it('should return a failing score when insufficient different informational HTML tags exist', () => {
      artifacts.Elements = {
        img: [],
        li: [],
        p: [{ text: 'foo' }],
        table: [],
      };
      const result = MeaningfulTagStructureAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when elements are non-existent', () => {
      const result = MeaningfulTagStructureAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });
  });
});
