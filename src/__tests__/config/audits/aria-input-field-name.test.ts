import auditAriaInputFieldName from '../../../config/audits/aria-input-field-name';

describe('aria-input-field-name audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaInputFieldName('en')).toMatchSnapshot();
  });
});
