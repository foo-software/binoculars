import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import FocusTraps from 'lighthouse/lighthouse-core/audits/accessibility/manual/focus-traps';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = FocusTraps.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
