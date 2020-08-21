import lighthouseOptions from '../lighthouseOptions';

describe('Lighthouse options', () => {
  it('should match snapshot', () => {
    expect(lighthouseOptions).toMatchSnapshot();
  });
});
