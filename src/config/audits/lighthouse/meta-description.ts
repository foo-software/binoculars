import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import MetaDescription from 'lighthouse/lighthouse-core/audits/seo/meta-description';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = MetaDescription.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
