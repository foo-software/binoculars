import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import Accesskeys from 'lighthouse/lighthouse-core/audits/accessibility/accesskeys';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = Accesskeys.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
