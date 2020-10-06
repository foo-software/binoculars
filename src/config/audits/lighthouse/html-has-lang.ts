import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import HtmlHasLang from 'lighthouse/lighthouse-core/audits/accessibility/html-has-lang';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = HtmlHasLang.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
