import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import defaultConfig from 'lighthouse/lighthouse-core/config/default-config';
import replaceLighthouseText from '../../helpers/replaceLighthouseText';
import replaceLinks from '../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => ({
  description: replaceLighthouseText(
    replaceLinks(
      getFormatted(defaultConfig.categories['seo'].description, locale),
    ),
  ),
  title: replaceLighthouseText(
    replaceLinks(getFormatted(defaultConfig.categories['seo'].title, locale)),
  ),
});
