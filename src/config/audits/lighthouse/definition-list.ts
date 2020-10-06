import { getFormatted } from 'lighthouse/lighthouse-core/lib/i18n/i18n';
import DefinitionList from 'lighthouse/lighthouse-core/audits/accessibility/definition-list';
import replaceLinks from '../../../helpers/replaceLinks';

export default (locale: string | undefined | unknown = 'en') => {
  const { description, title } = DefinitionList.meta;
  return {
    description: replaceLinks(getFormatted(description, locale)),
    title: replaceLinks(getFormatted(title, locale)),
  };
};
