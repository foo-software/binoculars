import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import FrameTitle from 'lighthouse/lighthouse-core/audits/accessibility/frame-title';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = FrameTitle.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
