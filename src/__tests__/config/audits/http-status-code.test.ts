import auditHttpStatusCode from '../../../config/audits/http-status-code';

describe('http-status-code audit', () => {
  it('should match snapshot', () => {
    expect(auditHttpStatusCode('en')).toMatchSnapshot();
  });
});
