import auditInputImageAlt from '../../../config/audits/input-image-alt';

describe('input-image-alt audit', () => {
  it('should match snapshot', () => {
    expect(auditInputImageAlt('en')).toMatchSnapshot();
  });
});
