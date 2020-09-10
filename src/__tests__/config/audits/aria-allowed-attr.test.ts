import auditAriaAllowedAttr from '../../../config/audits/aria-allowed-attr';

describe('aria-allowed-attr audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaAllowedAttr('en')).toMatchSnapshot();
  });
});
