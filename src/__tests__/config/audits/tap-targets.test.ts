import auditTapTargets from '../../../config/audits/tap-targets';

describe('tap-targets audit', () => {
  it('should match snapshot', () => {
    expect(auditTapTargets('en')).toMatchSnapshot();
  });
});
