import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import FontSize from 'lighthouse/lighthouse-core/audits/seo/font-size';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = FontSize.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
