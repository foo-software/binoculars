import auditHtmlHasLang from '../../../config/audits/html-has-lang';

describe('html-has-lang audit', () => {
  it('should match snapshot', () => {
    expect(auditHtmlHasLang('en')).toMatchSnapshot();
  });
});
