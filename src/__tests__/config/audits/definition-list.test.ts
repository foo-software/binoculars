import auditDefinitionList from '../../../config/audits/definition-list';

describe('definition-list audit', () => {
  it('should match snapshot', () => {
    expect(auditDefinitionList('en')).toMatchSnapshot();
  });
});
