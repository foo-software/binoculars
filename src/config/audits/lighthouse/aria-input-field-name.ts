import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import AriaInputFieldName from 'lighthouse/lighthouse-core/audits/accessibility/aria-input-field-name';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = AriaInputFieldName.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
