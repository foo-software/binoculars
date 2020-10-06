import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import Label from 'lighthouse/lighthouse-core/audits/accessibility/label';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = Label.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
