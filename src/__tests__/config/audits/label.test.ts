import auditLabel from '../../../config/audits/label';

describe('label audit', () => {
  it('should match snapshot', () => {
    expect(auditLabel('en')).toMatchSnapshot();
  });
});
