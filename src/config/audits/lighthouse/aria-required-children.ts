import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import AriaRequiredChildren from 'lighthouse/lighthouse-core/audits/accessibility/aria-required-children';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = AriaRequiredChildren.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
