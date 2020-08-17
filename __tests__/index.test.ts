import * as binoculars from '../src';

describe('@foo-software/binoculars', () => {
  it('should match snapshot', () => {
    expect(binoculars).toMatchSnapshot();
  });
});
