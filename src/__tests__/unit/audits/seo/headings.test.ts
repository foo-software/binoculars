import ArtifactsInterface from '../../../../interfaces/Artifacts';
import HeadingsAudit from '../../../../audits/seo/headings';

describe('HeadingsAudit', () => {
  describe('HeadingsAudit.meta', () => {
    it('should match snapshot', () => {
      expect(HeadingsAudit.meta).toMatchSnapshot();
    });
  });

  describe('HeadingsAudit.audit', () => {
    let artifacts: ArtifactsInterface = {};

    beforeAll(() => {
      artifacts = {};
    });

    it('should return a passing score when headings exist', () => {
      artifacts.Elements = {
        h1: [{ text: 'foo' }],
        h2: [{ text: 'bar' }],
      };
      const result = HeadingsAudit.audit(artifacts);
      expect(result.score).toEqual(1);
    });

    it('should return a failing score when h1 is an empty array', () => {
      artifacts.Elements = {
        h1: [],
        h2: [{ text: 'bar' }],
      };
      const result = HeadingsAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when h1 is non-existent', () => {
      artifacts.Elements = {
        h2: [{ text: 'bar' }],
      };
      const result = HeadingsAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when h2 is an empty array', () => {
      artifacts.Elements = {
        h1: [{ text: 'bar' }],
        h2: [],
      };
      const result = HeadingsAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when h2 is non-existent', () => {
      artifacts.Elements = {
        h1: [{ text: 'bar' }],
      };
      const result = HeadingsAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when both h1 and h2 are empty arrays', () => {
      artifacts.Elements = {
        h1: [],
        h2: [],
      };
      const result = HeadingsAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when both h1 and h2 are non-existent', () => {
      const result = HeadingsAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });
  });
});
