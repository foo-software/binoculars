import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import ValidLang from 'lighthouse/lighthouse-core/audits/accessibility/valid-lang';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = ValidLang.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
