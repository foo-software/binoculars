import binoculars from '../binoculars';

jest.setTimeout(30000);

export async function runBinoculars(url: string) {
  const result = await binoculars({ url });
  return result;
}
