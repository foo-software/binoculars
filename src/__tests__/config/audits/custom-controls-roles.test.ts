import auditCustomControlsRoles from '../../../config/audits/custom-controls-roles';

describe('custom-controls-roles audit', () => {
  it('should match snapshot', () => {
    expect(auditCustomControlsRoles('en')).toMatchSnapshot();
  });
});
