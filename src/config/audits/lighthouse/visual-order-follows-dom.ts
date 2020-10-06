import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import VisualOrderFollowsDom from 'lighthouse/lighthouse-core/audits/accessibility/manual/visual-order-follows-dom';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = VisualOrderFollowsDom.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
