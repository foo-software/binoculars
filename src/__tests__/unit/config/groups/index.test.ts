import * as groups from '../../../../config/groups';

interface DefinitionCollection {
  [key: string]: any;
}

const auditCollection: DefinitionCollection = groups;

describe('groups config', () => {
  for (const key in auditCollection) {
    describe(`${key}()`, () => {
      const audit = auditCollection[key]();
      it('should match snapshot', () => {
        expect(audit).toMatchSnapshot();
      });
    });
  }
});
