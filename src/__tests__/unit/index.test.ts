import * as binoculars from '../../index';

describe('Binoculars', () => {
  it('should match snapshot', () => {
    expect(binoculars).toMatchSnapshot();
  });
});
