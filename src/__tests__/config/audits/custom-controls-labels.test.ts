import auditCustomControlsLabels from '../../../config/audits/custom-controls-labels';

describe('custom-controls-labels audit', () => {
  it('should match snapshot', () => {
    expect(auditCustomControlsLabels('en')).toMatchSnapshot();
  });
});
