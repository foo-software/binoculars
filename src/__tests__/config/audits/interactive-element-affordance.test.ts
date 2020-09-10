import auditInteractiveElementAffordance from '../../../config/audits/interactive-element-affordance';

describe('interactive-element-affordance audit', () => {
  it('should match snapshot', () => {
    expect(auditInteractiveElementAffordance('en')).toMatchSnapshot();
  });
});
