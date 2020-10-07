import ArtifactsInterface from '../../../../interfaces/Artifacts';
import KeywordsAudit from '../../../../audits/seo/keywords';

describe('KeywordsAudit', () => {
  describe('KeywordsAudit.meta', () => {
    it('should match snapshot', () => {
      expect(KeywordsAudit.meta).toMatchSnapshot();
    });
  });

  describe('KeywordsAudit.audit', () => {
    let artifacts: ArtifactsInterface = {};

    beforeAll(() => {
      artifacts = {};
    });

    it('should return a passing score when sufficient keywords exist between title, description and content', () => {
      artifacts = {
        Elements: {
          body: [
            {
              text:
                'my page has meaningful content, yes it has MEANINGFUL CONTENT',
            },
          ],
        },
        MetaElements: [
          {
            name: 'description',
            content: 'description: some meaningful content',
          },
        ],
        TitleElement: {
          text: 'title: some meaningful content',
        },
      };
      const result = KeywordsAudit.audit(artifacts);
      expect(result.score).toEqual(1);
    });

    it('should return a failing score when less than 2 keywords exist in the content', () => {
      artifacts = {
        Elements: {
          body: [
            {
              text: 'my page has content, yes it has CONTENT',
            },
          ],
        },
        MetaElements: [
          {
            name: 'description',
            content: 'description: some meaningful content',
          },
        ],
        TitleElement: {
          text: 'title: some meaningful content',
        },
      };
      const result = KeywordsAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when less than 2 keywords exist in the description', () => {
      artifacts = {
        Elements: {
          body: [
            {
              text:
                'my page has meaningful content, yes it has MEANINGFUL CONTENT',
            },
          ],
        },
        MetaElements: [
          {
            name: 'description',
            content: 'description: some content',
          },
        ],
        TitleElement: {
          text: 'title: some meaningful content',
        },
      };
      const result = KeywordsAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });

    it('should return a failing score when less than 2 keyword instances exist in the content', () => {
      artifacts = {
        Elements: {
          body: [
            {
              text: 'my page has meaningful content',
            },
          ],
        },
        MetaElements: [
          {
            name: 'description',
            content: 'description: some meaningful content',
          },
        ],
        TitleElement: {
          text: 'title: some meaningful content',
        },
      };
      const result = KeywordsAudit.audit(artifacts);
      expect(result.score).toEqual(0);
    });
  });
});
