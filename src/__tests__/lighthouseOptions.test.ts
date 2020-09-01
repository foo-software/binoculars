import lighthouseOptions from '../config/lighthouseOptions';

describe('Lighthouse options', () => {
  it('should match snapshot', () => {
    expect(lighthouseOptions).toMatchSnapshot();
  });
});
