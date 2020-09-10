import auditThHasDataCells from '../../../config/audits/th-has-data-cells';

describe('th-has-data-cells audit', () => {
  it('should match snapshot', () => {
    expect(auditThHasDataCells('en')).toMatchSnapshot();
  });
});
