import auditIsCrawlable from '../../../config/audits/is-crawlable';

describe('is-crawlable audit', () => {
  it('should match snapshot', () => {
    expect(auditIsCrawlable('en')).toMatchSnapshot();
  });
});
