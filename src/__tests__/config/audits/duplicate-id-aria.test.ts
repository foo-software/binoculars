import auditDuplicateIdAria from '../../../config/audits/duplicate-id-aria';

describe('duplicate-id-aria audit', () => {
  it('should match snapshot', () => {
    expect(auditDuplicateIdAria('en')).toMatchSnapshot();
  });
});
