import auditCanonical from '../../../config/audits/canonical';

describe('canonical audit', () => {
  it('should match snapshot', () => {
    expect(auditCanonical('en')).toMatchSnapshot();
  });
});
