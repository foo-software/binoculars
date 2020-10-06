import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import LinkName from 'lighthouse/lighthouse-core/audits/accessibility/link-name';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = LinkName.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
