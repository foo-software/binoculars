import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import CustomControlsLabels from 'lighthouse/lighthouse-core/audits/accessibility/manual/custom-controls-labels';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = CustomControlsLabels.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
