import auditMetaDescription from '../../../config/audits/meta-description';

describe('meta-description audit', () => {
  it('should match snapshot', () => {
    expect(auditMetaDescription('en')).toMatchSnapshot();
  });
});
