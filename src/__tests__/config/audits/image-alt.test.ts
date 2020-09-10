import auditImageAlt from '../../../config/audits/image-alt';

describe('image-alt audit', () => {
  it('should match snapshot', () => {
    expect(auditImageAlt('en')).toMatchSnapshot();
  });
});
