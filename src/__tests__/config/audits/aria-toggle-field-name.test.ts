import auditAriaToggleFieldName from '../../../config/audits/aria-toggle-field-name';

describe('aria-toggle-field-name audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaToggleFieldName('en')).toMatchSnapshot();
  });
});
