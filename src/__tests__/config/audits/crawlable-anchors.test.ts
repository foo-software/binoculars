import auditCrawlableAnchors from '../../../config/audits/crawlable-anchors';

describe('crawlable-anchors audit', () => {
  it('should match snapshot', () => {
    expect(auditCrawlableAnchors('en')).toMatchSnapshot();
  });
});
