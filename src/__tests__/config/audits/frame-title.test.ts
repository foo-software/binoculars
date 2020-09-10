import auditFrameTitle from '../../../config/audits/frame-title';

describe('frame-title audit', () => {
  it('should match snapshot', () => {
    expect(auditFrameTitle('en')).toMatchSnapshot();
  });
});
