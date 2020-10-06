import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import HttpStatusCode from 'lighthouse/lighthouse-core/audits/seo/http-status-code';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = HttpStatusCode.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
