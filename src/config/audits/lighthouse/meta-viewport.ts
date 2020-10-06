import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import MetaViewport from 'lighthouse/lighthouse-core/audits/accessibility/meta-viewport';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = MetaViewport.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
