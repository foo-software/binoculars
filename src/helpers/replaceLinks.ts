import { definitions } from '../glossary';
import { LIGHTHOUSE_DOCUMENTATION_WEBSITE } from './getDocumentationLinks';

export const FOO_DOCUMENTATION_WEBSITE = 'https://www.foo.software/binoculars';

export default (text: string): string => {
  let updatedText = text;
  for (const definition of definitions) {
    const url = `${LIGHTHOUSE_DOCUMENTATION_WEBSITE}/${definition}`;
    const updatedUrl = `${FOO_DOCUMENTATION_WEBSITE}/${definition}`;
    if (updatedText.includes(url)) {
      updatedText = updatedText.replace(new RegExp(url, 'g'), updatedUrl);
    }
  }
  return updatedText;
};
