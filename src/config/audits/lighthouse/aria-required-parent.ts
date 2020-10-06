import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import AriaRequiredParent from 'lighthouse/lighthouse-core/audits/accessibility/aria-required-parent';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = AriaRequiredParent.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
