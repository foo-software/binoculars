import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import Tabindex from 'lighthouse/lighthouse-core/audits/accessibility/tabindex';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = Tabindex.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
