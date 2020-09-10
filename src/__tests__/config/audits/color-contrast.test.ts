import auditColorContrast from '../../../config/audits/color-contrast';

describe('color-contrast audit', () => {
  it('should match snapshot', () => {
    expect(auditColorContrast('en')).toMatchSnapshot();
  });
});
