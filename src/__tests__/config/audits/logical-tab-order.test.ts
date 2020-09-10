import auditLogicalTabOrder from '../../../config/audits/logical-tab-order';

describe('logical-tab-order audit', () => {
  it('should match snapshot', () => {
    expect(auditLogicalTabOrder('en')).toMatchSnapshot();
  });
});
