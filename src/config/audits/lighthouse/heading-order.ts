import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import HeadingOrder from 'lighthouse/lighthouse-core/audits/accessibility/heading-order';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = HeadingOrder.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
