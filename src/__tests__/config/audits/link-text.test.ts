import auditLinkText from '../../../config/audits/link-text';

describe('link-text audit', () => {
  it('should match snapshot', () => {
    expect(auditLinkText('en')).toMatchSnapshot();
  });
});
