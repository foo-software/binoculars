import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import IsCrawlable from 'lighthouse/lighthouse-core/audits/seo/is-crawlable';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = IsCrawlable.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
