import auditUseLandmarks from '../../../config/audits/use-landmarks';

describe('use-landmarks audit', () => {
  it('should match snapshot', () => {
    expect(auditUseLandmarks('en')).toMatchSnapshot();
  });
});
