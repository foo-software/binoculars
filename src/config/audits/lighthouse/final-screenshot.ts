import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import FinalScreenshot from 'lighthouse/lighthouse-core/audits/final-screenshot';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = FinalScreenshot.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
