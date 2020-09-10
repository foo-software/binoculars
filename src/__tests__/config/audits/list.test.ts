import auditList from '../../../config/audits/list';

describe('list audit', () => {
  it('should match snapshot', () => {
    expect(auditList('en')).toMatchSnapshot();
  });
});
