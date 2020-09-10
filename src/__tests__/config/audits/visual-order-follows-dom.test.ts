import auditVisualOrderFollowsDom from '../../../config/audits/visual-order-follows-dom';

describe('visual-order-follows-dom audit', () => {
  it('should match snapshot', () => {
    expect(auditVisualOrderFollowsDom('en')).toMatchSnapshot();
  });
});
