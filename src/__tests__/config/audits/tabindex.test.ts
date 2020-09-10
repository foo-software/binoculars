import auditTabindex from '../../../config/audits/tabindex';

describe('tabindex audit', () => {
  it('should match snapshot', () => {
    expect(auditTabindex('en')).toMatchSnapshot();
  });
});
