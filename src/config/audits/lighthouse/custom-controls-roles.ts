import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import CustomControlsRoles from 'lighthouse/lighthouse-core/audits/accessibility/manual/custom-controls-roles';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = CustomControlsRoles.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
