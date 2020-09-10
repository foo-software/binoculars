import auditAriaHiddenBody from '../../../config/audits/aria-hidden-body';

describe('aria-hidden-body audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaHiddenBody('en')).toMatchSnapshot();
  });
});
