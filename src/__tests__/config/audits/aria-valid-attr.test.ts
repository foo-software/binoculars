import auditAriaValidAttr from '../../../config/audits/aria-valid-attr';

describe('aria-valid-attr audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaValidAttr('en')).toMatchSnapshot();
  });
});
