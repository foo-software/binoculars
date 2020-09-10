import auditAriaValidAttrValue from '../../../config/audits/aria-valid-attr-value';

describe('aria-valid-attr-value audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaValidAttrValue('en')).toMatchSnapshot();
  });
});
