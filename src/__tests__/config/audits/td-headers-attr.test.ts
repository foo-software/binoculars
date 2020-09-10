import auditTdHeadersAttr from '../../../config/audits/td-headers-attr';

describe('td-headers-attr audit', () => {
  it('should match snapshot', () => {
    expect(auditTdHeadersAttr('en')).toMatchSnapshot();
  });
});
