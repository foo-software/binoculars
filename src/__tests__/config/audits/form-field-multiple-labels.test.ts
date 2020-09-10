import auditFormFieldMultipleLabels from '../../../config/audits/form-field-multiple-labels';

describe('form-field-multiple-labels audit', () => {
  it('should match snapshot', () => {
    expect(auditFormFieldMultipleLabels('en')).toMatchSnapshot();
  });
});
