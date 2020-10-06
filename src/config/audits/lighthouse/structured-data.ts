import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import StructuredData from 'lighthouse/lighthouse-core/audits/seo/manual/structured-data';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = StructuredData.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
