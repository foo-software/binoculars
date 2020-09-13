import * as audits from '../../../config/audits';

interface DefinitionCollection {
  [key: string]: any;
}

const auditCollection: DefinitionCollection = audits;

describe('audits config', () => {
  for (const key in auditCollection) {
    describe(`${key}()`, () => {
      const audit = auditCollection[key]();
      it('should match snapshot', () => {
        expect(audit).toMatchSnapshot();
      });
    });
  }
});
