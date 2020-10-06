import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import InteractiveElementAffordance from 'lighthouse/lighthouse-core/audits/accessibility/manual/interactive-element-affordance';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = InteractiveElementAffordance.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
