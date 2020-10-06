import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import AriaHiddenFocus from 'lighthouse/lighthouse-core/audits/accessibility/aria-hidden-focus';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = AriaHiddenFocus.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
