import auditMetaRefresh from '../../../config/audits/meta-refresh';

describe('meta-refresh audit', () => {
  it('should match snapshot', () => {
    expect(auditMetaRefresh('en')).toMatchSnapshot();
  });
});
