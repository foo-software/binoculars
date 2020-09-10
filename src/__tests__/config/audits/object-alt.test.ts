import auditObjectAlt from '../../../config/audits/object-alt';

describe('object-alt audit', () => {
  it('should match snapshot', () => {
    expect(auditObjectAlt('en')).toMatchSnapshot();
  });
});
