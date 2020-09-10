import auditFocusableControls from '../../../config/audits/focusable-controls';

describe('focusable-controls audit', () => {
  it('should match snapshot', () => {
    expect(auditFocusableControls('en')).toMatchSnapshot();
  });
});
