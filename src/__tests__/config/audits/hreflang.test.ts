import auditHreflang from '../../../config/audits/hreflang';

describe('hreflang audit', () => {
  it('should match snapshot', () => {
    expect(auditHreflang('en')).toMatchSnapshot();
  });
});
