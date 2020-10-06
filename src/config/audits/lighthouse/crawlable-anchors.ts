import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import CrawlableAnchors from 'lighthouse/lighthouse-core/audits/seo/crawlable-anchors';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = CrawlableAnchors.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
