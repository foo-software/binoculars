import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import AriaRoles from 'lighthouse/lighthouse-core/audits/accessibility/aria-roles';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = AriaRoles.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
