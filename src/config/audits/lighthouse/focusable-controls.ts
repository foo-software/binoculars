import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import FocusableControls from 'lighthouse/lighthouse-core/audits/accessibility/manual/focusable-controls';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = FocusableControls.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
