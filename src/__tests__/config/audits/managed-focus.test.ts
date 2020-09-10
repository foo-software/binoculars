import auditManagedFocus from '../../../config/audits/managed-focus';

describe('managed-focus audit', () => {
  it('should match snapshot', () => {
    expect(auditManagedFocus('en')).toMatchSnapshot();
  });
});
