import { Audit } from 'lighthouse';
import AuditScoreInterface from '../../interfaces/AuditScore';

export const MAX_TEXT_LENGTH = 70;
export const MIN_TEXT_LENGTH = 50;

export const UIStrings = {
  title: 'Title length is appropriate',
  failureTitle: `Title is not between ${MIN_TEXT_LENGTH} - ${MAX_TEXT_LENGTH} characters`,
  description: `A title defines a descriptive summary of a page and should have the right amount of content for search engines to parse. Title should be between ${MIN_TEXT_LENGTH} - ${MAX_TEXT_LENGTH} characters.`,
  explanation: 'Title text is missing or empty.',
};

export default class TitleLength extends Audit {
  static get meta() {
    return {
      id: 'title-length',
      title: UIStrings.title,
      failureTitle: UIStrings.failureTitle,
      description: UIStrings.description,
      requiredArtifacts: ['TitleElement'],
    };
  }

  static audit(artifacts: any): AuditScoreInterface {
    const title = artifacts.TitleElement;

    if (!title || !title.text) {
      return {
        explanation: UIStrings.explanation,
        score: 0,
      };
    }

    const trimmedTitleLength = title.text.trim().length;

    if (
      trimmedTitleLength < MIN_TEXT_LENGTH ||
      trimmedTitleLength > MAX_TEXT_LENGTH
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
