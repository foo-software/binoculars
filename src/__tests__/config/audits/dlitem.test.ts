import auditDlitem from '../../../config/audits/dlitem';

describe('dlitem audit', () => {
  it('should match snapshot', () => {
    expect(auditDlitem('en')).toMatchSnapshot();
  });
});
