import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import LinkText from 'lighthouse/lighthouse-core/audits/seo/link-text';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = LinkText.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
