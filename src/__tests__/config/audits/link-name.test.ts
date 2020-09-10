import auditLinkName from '../../../config/audits/link-name';

describe('link-name audit', () => {
  it('should match snapshot', () => {
    expect(auditLinkName('en')).toMatchSnapshot();
  });
});
