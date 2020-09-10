import auditHeadingOrder from '../../../config/audits/heading-order';

describe('heading-order audit', () => {
  it('should match snapshot', () => {
    expect(auditHeadingOrder('en')).toMatchSnapshot();
  });
});
