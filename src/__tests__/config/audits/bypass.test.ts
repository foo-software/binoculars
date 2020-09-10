import auditBypass from '../../../config/audits/bypass';

describe('bypass audit', () => {
  it('should match snapshot', () => {
    expect(auditBypass('en')).toMatchSnapshot();
  });
});
