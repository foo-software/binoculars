import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import defaultConfig from 'lighthouse/lighthouse-core/config/default-config';
import replaceLinks from '../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => ({
  description: replaceLinks(
    getFormatted(defaultConfig.groups['a11y-language'].description, locale),
  ),
  title: replaceLinks(
    getFormatted(defaultConfig.groups['a11y-language'].title, locale),
  ),
});
