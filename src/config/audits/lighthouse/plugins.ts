import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import Plugins from 'lighthouse/lighthouse-core/audits/seo/plugins';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = Plugins.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
