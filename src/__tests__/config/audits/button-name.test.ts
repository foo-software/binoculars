import auditButtonName from '../../../config/audits/button-name';

describe('button-name audit', () => {
  it('should match snapshot', () => {
    expect(auditButtonName('en')).toMatchSnapshot();
  });
});
