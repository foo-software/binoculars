import auditVideoDescription from '../../../config/audits/video-description';

describe('video-description audit', () => {
  it('should match snapshot', () => {
    expect(auditVideoDescription('en')).toMatchSnapshot();
  });
});
