import auditOffscreenContentHidden from '../../../config/audits/offscreen-content-hidden';

describe('offscreen-content-hidden audit', () => {
  it('should match snapshot', () => {
    expect(auditOffscreenContentHidden('en')).toMatchSnapshot();
  });
});
