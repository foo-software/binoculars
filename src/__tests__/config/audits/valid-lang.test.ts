import auditValidLang from '../../../config/audits/valid-lang';

describe('valid-lang audit', () => {
  it('should match snapshot', () => {
    expect(auditValidLang('en')).toMatchSnapshot();
  });
});
