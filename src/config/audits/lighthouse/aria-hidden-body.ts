import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import AriaHiddenBody from 'lighthouse/lighthouse-core/audits/accessibility/aria-hidden-body';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = AriaHiddenBody.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
