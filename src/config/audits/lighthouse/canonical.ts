import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import Canonical from 'lighthouse/lighthouse-core/audits/seo/canonical';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = Canonical.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
