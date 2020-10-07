import { Audit } from 'lighthouse';
import AuditScoreInterface from '../../interfaces/AuditScore';

export const MAX_TEXT_LENGTH = 160;
export const MIN_TEXT_LENGTH = 100;

export const UIStrings = {
  title: 'Description length is appropriate',
  failureTitle: `Description is not between ${MIN_TEXT_LENGTH} - ${MAX_TEXT_LENGTH} characters`,
  description: `A description provides an extended summary of a page and should have the right amount of content for search engines to parse. Description should be between ${MIN_TEXT_LENGTH} - ${MAX_TEXT_LENGTH} characters`,
  explanation: 'Description text is missing or empty.',
};

export default class DescriptionLength extends Audit {
  static get meta() {
    return {
      id: 'description-length',
      title: UIStrings.title,
      failureTitle: UIStrings.failureTitle,
      description: UIStrings.description,
      requiredArtifacts: ['MetaElements'],
    };
  }

  static audit(artifacts: any): AuditScoreInterface {
    const metaDescription = artifacts.MetaElements.find(
      (meta: any) => meta.name === 'description',
    );

    if (!metaDescription) {
      return {
        score: 0,
        explanation: UIStrings.explanation,
      };
    }

    const description = metaDescription.content || '';

    const trimmedDescriptionLength = description.trim().length;

    if (
      trimmedDescriptionLength < MIN_TEXT_LENGTH ||
      trimmedDescriptionLength > MAX_TEXT_LENGTH
    ) {
      return {
        score: 0,
      };
    }

    return {
      score: 1,
    };
  }
}
