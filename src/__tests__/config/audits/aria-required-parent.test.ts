import auditAriaRequiredParent from '../../../config/audits/aria-required-parent';

describe('aria-required-parent audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaRequiredParent('en')).toMatchSnapshot();
  });
});
