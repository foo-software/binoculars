import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import HtmlLangValid from 'lighthouse/lighthouse-core/audits/accessibility/html-lang-valid';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = HtmlLangValid.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
