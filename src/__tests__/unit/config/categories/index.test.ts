import * as categories from '../../../../config/categories';

interface DefinitionCollection {
  [key: string]: any;
}

const auditCollection: DefinitionCollection = categories;

describe('categories config', () => {
  for (const key in auditCollection) {
    describe(`${key}()`, () => {
      const audit = auditCollection[key]();
      it('should match snapshot', () => {
        expect(audit).toMatchSnapshot();
      });
    });
  }
});
