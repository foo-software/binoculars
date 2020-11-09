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
    const score = result.result.categories.binocularsSeo.score * 100;

    let text = `*URL*: ${result.url}\n*Score*: \`${score}\``;

    if (result.report) {
      text += `\n*Report*: <${result.report}|click here>`;
    }

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

    await webhook.send({
      text: 'Binoculars Audit',
      attachments: [
        {
          color: getLighthouseScoreColor({
            isHex: true,
            score,
          }),
          text,
          thumb_url:
            'https://s3.amazonaws.com/foo.software/images/marketing/binoculars.png',
          ...(!footer
            ? {}
            : {
                footer,
              }),
        },
      ],
    });
  }
};
