import auditLayoutTable from '../../../config/audits/layout-table';

describe('layout-table audit', () => {
  it('should match snapshot', () => {
    expect(auditLayoutTable('en')).toMatchSnapshot();
  });
});
