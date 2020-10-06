import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import ThHasDataCells from 'lighthouse/lighthouse-core/audits/accessibility/th-has-data-cells';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = ThHasDataCells.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
