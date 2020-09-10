import auditRobotsTxt from '../../../config/audits/robots-txt';

describe('robots-txt audit', () => {
  it('should match snapshot', () => {
    expect(auditRobotsTxt('en')).toMatchSnapshot();
  });
});
