import auditViewport from '../../../config/audits/viewport';

describe('viewport audit', () => {
  it('should match snapshot', () => {
    expect(auditViewport('en')).toMatchSnapshot();
  });
});
