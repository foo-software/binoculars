import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import DuplicateIdAria from 'lighthouse/lighthouse-core/audits/accessibility/duplicate-id-aria';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = DuplicateIdAria.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
