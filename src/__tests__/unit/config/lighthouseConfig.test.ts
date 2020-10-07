import lighthouseConfig from '../../../config/lighthouseConfig';

describe('Lighthouse options', () => {
  it('should match snapshot', () => {
    expect(lighthouseConfig('en')).toMatchSnapshot();
  });
});
