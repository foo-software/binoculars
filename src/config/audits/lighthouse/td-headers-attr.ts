import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import TdHeadersAttr from 'lighthouse/lighthouse-core/audits/accessibility/td-headers-attr';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = TdHeadersAttr.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
