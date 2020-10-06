import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import ObjectAlt from 'lighthouse/lighthouse-core/audits/accessibility/object-alt';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = ObjectAlt.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
