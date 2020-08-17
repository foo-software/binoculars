import binoculars from '../../bin/binoculars';

describe('@foo-software/binoculars', () => {
  it('should match snapshot', () => {
    expect(binoculars).toMatchSnapshot();
  });
});
