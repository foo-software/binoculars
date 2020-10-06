import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import LogicalTabOrder from 'lighthouse/lighthouse-core/audits/accessibility/manual/logical-tab-order';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = LogicalTabOrder.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
