import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import ColorContrast from 'lighthouse/lighthouse-core/audits/accessibility/color-contrast';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = ColorContrast.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
