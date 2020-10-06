import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import OffscreenContentHidden from 'lighthouse/lighthouse-core/audits/accessibility/manual/offscreen-content-hidden';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = OffscreenContentHidden.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
