import auditListitem from '../../../config/audits/listitem';

describe('listitem audit', () => {
  it('should match snapshot', () => {
    expect(auditListitem('en')).toMatchSnapshot();
  });
});
