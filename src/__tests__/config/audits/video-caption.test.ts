import auditVideoCaption from '../../../config/audits/video-caption';

describe('video-caption audit', () => {
  it('should match snapshot', () => {
    expect(auditVideoCaption('en')).toMatchSnapshot();
  });
});
