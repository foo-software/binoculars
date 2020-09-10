import auditPlugins from '../../../config/audits/plugins';

describe('plugins audit', () => {
  it('should match snapshot', () => {
    expect(auditPlugins('en')).toMatchSnapshot();
  });
});
