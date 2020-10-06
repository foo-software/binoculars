import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import AriaValidAttr from 'lighthouse/lighthouse-core/audits/accessibility/aria-valid-attr';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = AriaValidAttr.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
