import { IncomingWebhook } from '@slack/webhook';
import getLighthouseScoreColor from './getLighthouseScoreColor';
import BinocularsResultInterface from '../interfaces/BinocularsResult';

export default async ({
  author,
  branch,
  pr: prParam,
  results,
  sha,
  slackWebhookUrl,
}: {
  author?: string | undefined | unknown;
  branch?: string | undefined | unknown;
  pr?: string | undefined | unknown;
  results: BinocularsResultInterface[];
  sha?: string | undefined | unknown;
  slackWebhookUrl: string;
}) => {
  const webhook = new IncomingWebhook(slackWebhookUrl);

  // sometimes we get weird input
  const pr =
    typeof prParam !== 'string' || prParam === 'true' ? undefined : prParam;

  for (const result of results) {
    // link the report if we have it
    let text = !result.report
      ? 'Binoculars audit'
      : `<${result.report}|Binoculars audit>`;

    // if we have a branch
    if (branch) {
      const branchText = !pr ? branch : `<${pr}|${branch}>`;
      text = `${text} change made in \`${branchText}\`.`;
    }

    let footer;
    if (author) {
      footer = `by ${author}`;

      if (typeof sha === 'string') {
        footer = `${footer} in ${sha.slice(0, 10)}`;
      }
    }

    const score = result.result.categories.binocularsSeo.score * 100;

    await webhook.send({
      text: result.url,
      attachments: [
        {
          color: '#58e3be',
          text,
          thumb_url:
            'https://s3.amazonaws.com/foo.software/images/marketing/binoculars.png',
          ...(!footer
            ? {}
            : {
                footer,
              }),
        },
        {
          color: getLighthouseScoreColor({
            isHex: true,
            score,
          }),
          text: `*SEO*: ${score}`,
        },
      ],
    });
  }
};
