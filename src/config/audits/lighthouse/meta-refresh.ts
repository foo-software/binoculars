import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import MetaRefresh from 'lighthouse/lighthouse-core/audits/accessibility/meta-refresh';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = MetaRefresh.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
