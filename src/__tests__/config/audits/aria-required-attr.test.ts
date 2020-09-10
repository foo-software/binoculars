import auditAriaRequiredAttr from '../../../config/audits/aria-required-attr';

describe('aria-required-attr audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaRequiredAttr('en')).toMatchSnapshot();
  });
});
