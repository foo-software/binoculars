import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import Hreflang from 'lighthouse/lighthouse-core/audits/seo/hreflang';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = Hreflang.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
