import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import ManagedFocus from 'lighthouse/lighthouse-core/audits/accessibility/manual/managed-focus';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = ManagedFocus.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
