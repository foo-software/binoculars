import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import AriaToggleFieldName from 'lighthouse/lighthouse-core/audits/accessibility/aria-toggle-field-name';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = AriaToggleFieldName.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
