import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import AriaRequiredAttr from 'lighthouse/lighthouse-core/audits/accessibility/aria-required-attr';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = AriaRequiredAttr.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
