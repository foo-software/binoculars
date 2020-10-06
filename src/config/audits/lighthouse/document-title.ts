import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import DocumentTitle from 'lighthouse/lighthouse-core/audits/accessibility/document-title';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = DocumentTitle.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
