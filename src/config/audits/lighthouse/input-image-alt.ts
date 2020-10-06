import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import InputImageAlt from 'lighthouse/lighthouse-core/audits/accessibility/input-image-alt';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = InputImageAlt.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
