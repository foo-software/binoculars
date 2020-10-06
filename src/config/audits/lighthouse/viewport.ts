import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import Viewport from 'lighthouse/lighthouse-core/audits/viewport';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = Viewport.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
