import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import TapTargets from 'lighthouse/lighthouse-core/audits/seo/tap-targets';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = TapTargets.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
