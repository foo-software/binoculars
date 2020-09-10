import auditAriaRoles from '../../../config/audits/aria-roles';

describe('aria-roles audit', () => {
  it('should match snapshot', () => {
    expect(auditAriaRoles('en')).toMatchSnapshot();
  });
});
