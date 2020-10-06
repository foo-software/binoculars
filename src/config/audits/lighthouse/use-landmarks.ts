import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import UseLandmarks from 'lighthouse/lighthouse-core/audits/accessibility/manual/use-landmarks';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = UseLandmarks.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
