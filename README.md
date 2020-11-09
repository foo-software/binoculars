# `@foo-software/binoculars`

<img alt="Binoculars Logo" align="right" src="https://s3.amazonaws.com/foo.software/images/marketing/binoculars.svg" width="20%" />

A tool to measure web page SEO friendliness. Binoculars extends [Google's Lighthouse](https://github.com/GoogleChrome/lighthouse) to provide a more opinionated, SEO specific audit.

- Choice of programmatic usage or CLI.
- Run a single audit or multiple audits at once.
- Upload reports to S3 via simple configuration.
- Automatically post results as comments in GitHub via commits or pull requests (see [options](#options)).
- Automatically post results in Slack (see [options](#options)).

# Meaningful Content

Binoculars extends Lighthouse by adding the following audits in a custom group named "Meaningful Content".

- **Title Length**: Title should be between 50 - 70 characters.
- **Description Length**: Descriptions should be between 100 - 160 characters.
- **Keywords**: Keyword phrases of at least 2 words should exist in the title, description and at least twice in the content of the page.
- **Headings**: Has at least 1 `<h1>` tag and 1 `<h2>` tag.
- **Meaningful Text**: Has sufficient textual content (300 characters).
- **Meaningful Tag Structure**: Has at least 2 different informational HTML tags of the following types: `<p>`, `<li>`, `<img>`, `<table>`.

# Metrics

Binoculars accounts for metrics from Lighthouse SEO and accessibility categories and weights them accordingly. It combines metrics from these categories with the "Meaningful Content" group detailed above. See the complete list of audits and weighting [here](src/config/auditRefsConfig.ts).

# Usage

Use programmatically or via CLI.

```
npm i @foo-software/binoculars
```

or

```
yarn @foo-software/binoculars
```

## Programmatic Usage

```javascript
const path = require('path');
const binoculars = require('@foo-software/binoculars').default;

(async () => {
  const results = await binoculars({
    url: 'https://www.foo.software',
 
    // example if you have an "artifacts" directory in your root directory
    outputDirectory: path.resolve('./artifacts'),
 
    // any other options go here
  });
 
  console.log('local report', results[0].localReport);
  // local report ./reports/report-1602194942162.html

  console.log('score', results[0].result.categories.binocularsSeo.score);
  // score 0.96
})();
```

## CLI Usage

Arguments are represented in the [options section](#options). Any array type relies on the pipe symbol as shown with `urls` in the second example below.

```bash
binoculars --url https://www.foo.software --outputDirectory ./artifacts
```

Use a `|` when auditing multiple URLs like so:

```bash
binoculars --urls "https://www.foo.software|https://www.foo.software/register"
```

# Options

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
    <th>Required</th>
  </tr>
  <tr>
    <td><code>author</code></td>
    <td>For Slack notifications: A user handle, typically from GitHub.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>awsAccessKeyId</code></td>
    <td>The AWS <code>accessKeyId</code> for an S3 bucket.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>awsBucket</code></td>
    <td>The AWS <code>Bucket</code> for an S3 bucket.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>awsRegion</code></td>
    <td>The AWS <code>region</code> for an S3 bucket.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>awsSecretAccessKey</code></td>
    <td>The AWS <code>secretAccessKey</code> for an S3 bucket.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>branch</code></td>
    <td>For Slack notifications: A version control branch, typically from GitHub.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>commentAccessToken</code></td>
    <td><a href="https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line">Access token</a> of a user to post PR comments.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>commentUrl</code></td>
    <td>An endpoint to post comments to. Typically this will be from <a href="https://developer.github.com/v3/pulls/reviews/#create-a-pull-request-review">GitHub's API</a>. Example: <code>https://api.github.com/repos/:owner/:repo/pulls/:pull_number/reviews</code></td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>enableComments</code></td>
    <td>If <code>true</code> and <code>commentAccessToken</code> is set along with <code>commentUrl</code>, scores will be posted as comments.</td>
    <td><code>boolean</code></td>
    <td><code>true</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>minScore</code></td>
    <td>The required minimum score. If score is lower an error will throw.</td>
    <td><code>number</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <!-- <tr>
    <td><code>locale</code></td>
    <td>A locale for Lighthouse reports. Example: <code>ja</code></td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr> -->
  <tr>
    <td><code>outputDirectory</code></td>
    <td>An absolute directory path to output report. You can do this an an alternative or combined with an S3 upload.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>pr</code></td>
    <td>For Slack notifications: A version control pull request URL, typically from GitHub.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>slackWebhookUrl</code></td>
    <td>A Slack Incoming Webhook URL to send notifications to.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>sha</code></td>
    <td>For Slack notifications: A version control <code>sha</code>, typically from GitHub.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>no</td>
  </tr>
  <tr>
    <td><code>url</code></td>
    <td>A URL to run Binoculars against.</td>
    <td><code>string</code></td>
    <td><code>undefined</code></td>
    <td>yes</td>
  </tr>
  <tr>
    <td><code>urls</code></td>
    <td>An array of URLs. In the CLI this value should be a pipe separated list (<code>|</code>).</td>
    <td><code>string[]</code></td>
    <td><code>undefined</code></td>
    <td>yes</td>
  </tr>
</table>

# Return Payload

`binoculars` is a promise that resolves an array. The reason it resolves with an array is because options allow `url` or `urls`. Because a consistent return is ideal, we return an array regardless if there is only one result or more. Each array item is an object with the below payload.

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
  </tr>
  <tr>
    <td><code>localReport</code></td>
    <td>A local path to the report (if applicable).</td>
    <td><code>string</code></td>
  </tr>
  <tr>
    <td><code>result</code></td>
    <td>A comprehensive result - the equivalent of what is returned when using the <code>lighthouse</code> module directly.</td>
    <td><code>object</code></td>
  </tr>
  <tr>
    <td><code>report</code></td>
    <td>A URL to the report HTML file.</td>
    <td><code>string</code></td>
  </tr>
</table>

# Environment Variables

You can optionally provide environment variables as detailed below.

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>BINOCULARS_CHROME_PORT</code></td>
    <td>The port for Chrome to run audits on.</td>
    <td>number</td>
    <td><code>4000</code></td>
  </tr>
  <tr>
    <td><code>BINOCULARS_INTEGRATION_SERVER_DOMAIN</code></td>
    <td>Domain of the integration server.</td>
    <td>string</td>
    <td><code>localhost</code></td>
  </tr>
  <tr>
    <td><code>BINOCULARS_INTEGRATION_SERVER_PORT</code></td>
    <td>Port to run the integration server on.</td>
    <td>number</td>
    <td><code>3000</code></td>
  </tr>
  <tr>
    <td><code>BINOCULARS_INTEGRATION_SERVER_PROTOCOL</code></td>
    <td>Protocol of the integration server.</td>
    <td>string</td>
    <td><code>http</code></td>
  </tr>
  <tr>
    <td><code>LOG_LEVEL</code></td>
    <td>The Winston log level (use "off" to run without logging).</td>
    <td>string</td>
    <td><code>info</code></td>
  </tr>
</table>

## Credits

> <img src="https://lighthouse-check.s3.amazonaws.com/images/logo-simple-blue-light-512.png" width="100" height="100" align="left" /> This package was brought to you by [Foo - a website performance monitoring tool](https://www.foo.software). Create a **free account** with standard performance testing. Automatic website performance testing, uptime checks, charts showing performance metrics by day, month, and year. Foo also provides real time notifications. Users can integrate email, Slack and PagerDuty notifications.
