import ArtifactsInterface from '../../../interfaces/Artifacts';
import DescriptionLengthAudit from '../../../audits/seo/description-length';

describe('DescriptionLengthAudit', () => {
  describe('DescriptionLengthAudit.meta', () => {
    it('should match snapshot', () => {
      expect(DescriptionLengthAudit.meta).toMatchSnapshot();
    });
  });

  describe('DescriptionLengthAudit.audit', () => {
    let artifacts: ArtifactsInterface = {};

    beforeAll(() => {
      artifacts = {};
    });

    it('should return a passing score when description is appropriate length', () => {
      artifacts.MetaElements = [
        {
          name: 'description',
          content:
            'ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem',
        },
      ];
      const result = DescriptionLengthAudit.audit(artifacts);
      expect(result).toEqual({ score: 1 });
    });

    it('should return a failing score when description is too long', () => {
      artifacts.MetaElements = [
        {
          name: 'description',
          content:
            'ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        },
      ];
      const result = DescriptionLengthAudit.audit(artifacts);
      expect(result).toEqual({ score: 0 });
    });
  });
});
