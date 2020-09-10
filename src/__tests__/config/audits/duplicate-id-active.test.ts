import auditDuplicateIdActive from '../../../config/audits/duplicate-id-active';

describe('duplicate-id-active audit', () => {
  it('should match snapshot', () => {
    expect(auditDuplicateIdActive('en')).toMatchSnapshot();
  });
});
