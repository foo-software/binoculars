import lighthouseConfig from '../lighthouseConfig';

describe('Lighthouse options', () => {
  it('should match snapshot', () => {
    expect(lighthouseConfig).toMatchSnapshot();
  });
});
