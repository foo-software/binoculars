import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import RobotsTxt from 'lighthouse/lighthouse-core/audits/seo/robots-txt';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = RobotsTxt.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
