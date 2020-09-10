import auditStructuredData from '../../../config/audits/structured-data';

describe('structured-data audit', () => {
  it('should match snapshot', () => {
    expect(auditStructuredData('en')).toMatchSnapshot();
  });
});
