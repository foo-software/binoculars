import auditHtmlLangValid from '../../../config/audits/html-lang-valid';

describe('html-lang-valid audit', () => {
  it('should match snapshot', () => {
    expect(auditHtmlLangValid('en')).toMatchSnapshot();
  });
});
