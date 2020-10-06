import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import ButtonName from 'lighthouse/lighthouse-core/audits/accessibility/button-name';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = ButtonName.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
