import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import Bypass from 'lighthouse/lighthouse-core/audits/accessibility/bypass';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = Bypass.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
