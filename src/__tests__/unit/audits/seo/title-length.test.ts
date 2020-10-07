import ArtifactsInterface from '../../../../interfaces/Artifacts';
import TitleLengthAudit from '../../../../audits/seo/title-length';

describe('TitleLengthAudit', () => {
  describe('TitleLengthAudit.meta', () => {
    it('should match snapshot', () => {
      expect(TitleLengthAudit.meta).toMatchSnapshot();
    });
  });

  describe('TitleLengthAudit.audit', () => {
    let artifacts: ArtifactsInterface = {};

    beforeAll(() => {
      artifacts = {};
    });

    it('should return a passing score when title is appropriate length', () => {
      artifacts.TitleElement = {
        text:
          'ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      };
      const result = TitleLengthAudit.audit(artifacts);
      expect(result.score).toEqual(1);
    });

    it('should return a failing score when title is too long', () => {
      artifacts.TitleElement = {
        text:
          'ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      };
      const result = TitleLengthAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when title is too short', () => {
      artifacts.TitleElement = {
        text: 'ipsum lorem',
      };
      const result = TitleLengthAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when title is empty', () => {
      artifacts.TitleElement = {
        text: '',
      };
      const result = TitleLengthAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when title non-existent', () => {
      const result = TitleLengthAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });
  });
});
