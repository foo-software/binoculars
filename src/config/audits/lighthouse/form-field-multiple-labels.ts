import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import FormFieldMultipleLabels from 'lighthouse/lighthouse-core/audits/accessibility/form-field-multiple-labels';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = FormFieldMultipleLabels.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
