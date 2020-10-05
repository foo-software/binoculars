import { Audit } from 'lighthouse';
import AuditScore from '../../interfaces/AuditScore';

export const UIStrings = {
  title: 'Description Length',
  failureTitle: 'Description is not between 100 - 160 characters',
  description:
    'A description provides an extended summary of a page and should have the right amount of content for search engines to parse.',
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

  static audit(artifacts: any): AuditScore {
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

    if (trimmedDescriptionLength < 100 || trimmedDescriptionLength > 160) {
      return {
        score: 0,
      };
    }

    return {
      score: 1,
    };
  }
}
