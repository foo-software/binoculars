import auditFocusTraps from '../../../config/audits/focus-traps';

describe('focus-traps audit', () => {
  it('should match snapshot', () => {
    expect(auditFocusTraps('en')).toMatchSnapshot();
  });
});
