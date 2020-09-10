import auditAccesskeys from '../../../config/audits/accesskeys';

describe('accesskeys audit', () => {
  it('should match snapshot', () => {
    expect(auditAccesskeys('en')).toMatchSnapshot();
  });
});
