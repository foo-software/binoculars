import auditMetaViewport from '../../../config/audits/meta-viewport';

describe('meta-viewport audit', () => {
  it('should match snapshot', () => {
    expect(auditMetaViewport('en')).toMatchSnapshot();
  });
});
