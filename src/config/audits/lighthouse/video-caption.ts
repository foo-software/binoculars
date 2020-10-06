import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import VideoCaption from 'lighthouse/lighthouse-core/audits/accessibility/video-caption';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = VideoCaption.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
