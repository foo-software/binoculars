import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import AriaValidAttrValue from 'lighthouse/lighthouse-core/audits/accessibility/aria-valid-attr-value';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = AriaValidAttrValue.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
