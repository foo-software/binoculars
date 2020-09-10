import auditAriaRequiredChildren from '../../../config/audits/aria-required-children';

describe('aria-required-children audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaRequiredChildren('en')).toMatchSnapshot();
  });
});
