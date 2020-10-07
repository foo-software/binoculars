import * as audits from '../../../../../config/audits/lighthouse';
import Collection from '../../../../../interfaces/Collection';

const auditCollection: Collection = audits;

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
