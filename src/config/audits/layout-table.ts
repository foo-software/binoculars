import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import LayoutTable from 'lighthouse/lighthouse-core/audits/accessibility/layout-table';
import replaceLinks from '../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = LayoutTable.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
