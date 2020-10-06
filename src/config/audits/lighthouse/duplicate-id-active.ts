import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import DuplicateIdActive from 'lighthouse/lighthouse-core/audits/accessibility/duplicate-id-active';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = DuplicateIdActive.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
