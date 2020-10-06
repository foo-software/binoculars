import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import VideoDescription from 'lighthouse/lighthouse-core/audits/accessibility/video-description';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = VideoDescription.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
