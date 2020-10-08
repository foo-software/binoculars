# `@foo-software/binoculars`

A tool to measure web page SEO friendliness. Binoculars extends [Google's Lighthouse](https://github.com/GoogleChrome/lighthouse) to provide a more opinionated, SEO specific audit.

- Choice programmatic usage or CLI.
- Run a single audit or multiple audits at once.
- Upload reports to S3 via simple configuration.

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
