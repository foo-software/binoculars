import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import Listitem from 'lighthouse/lighthouse-core/audits/accessibility/listitem';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = Listitem.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
