import auditFontSize from '../../../config/audits/font-size';

describe('font-size audit', () => {
  it('should match snapshot', () => {
    expect(auditFontSize('en')).toMatchSnapshot();
  });
});
