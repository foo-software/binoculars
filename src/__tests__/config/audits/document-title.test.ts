import auditDocumentTitle from '../../../config/audits/document-title';

describe('document-title audit', () => {
  it('should match snapshot', () => {
    expect(auditDocumentTitle('en')).toMatchSnapshot();
  });
});
