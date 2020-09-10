import auditAriaHiddenFocus from '../../../config/audits/aria-hidden-focus';

describe('aria-hidden-focus audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaHiddenFocus('en')).toMatchSnapshot();
  });
});
