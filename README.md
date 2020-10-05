# `@foo-software/binoculars`

A tool to measure web page SEO friendliness.

## Metrics

Below are metrics we'll pull together and weights to generate a report. Most metrics come from Lighthouse, but we have some custom ones as well.

<details>
  <summary>Expand here to see metrics</summary>
  <table>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Weight</th>
      <th>Source</th>
    </tr>
    <tr>
      <th colspan="4">
        Accessibility
      </th>
    </tr>
    <tr>
      <td>aria-hidden-body</td>
      <td><code>[aria-hidden="true"]</code> is not present on the document <code>&lt;body&gt;</code></td>
      <td>10</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>aria-required-attr</td>
      <td><code>[role]</code>s have all required <code>[aria-*]</code> attributes</td>
      <td>10</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>aria-required-children</td>
      <td>Elements with an ARIA <code>[role]</code> that require children to contain a specific <code>[role]</code> have all required children.</td>
      <td>10</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>aria-required-parent</td>
      <td><code>[role]</code>s are contained by their required parent element</td>
      <td>10</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>aria-roles</td>
      <td><code>[role]</code> values are valid</td>
      <td>10</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>image-alt</td>
      <td>Image elements have <code>[alt]</code> attributes</td>
      <td>10</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>meta-viewport</td>
      <td><code>[user-scalable="no"]</code> is not used in the <code>&lt;meta name="viewport"&gt;</code> element and the <code>[maximum-scale]</code> attribute is not less than 5.</td>
      <td>10</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>bypass</td>
      <td>The page contains a heading, skip link, or landmark region</td>
      <td>3</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>color-contrast</td>
      <td>Background and foreground colors do not have a sufficient contrast ratio.</td>
      <td>3</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>html-has-lang</td>
      <td><code>&lt;html&gt;</code> element has a <code>[lang]</code> attribute</td>
      <td>3</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>html-lang-valid</td>
      <td><code>html</code> element has a valid value for its <code>[lang]</code> attribute</td>
      <td>3</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>link-name</td>
      <td>Links have a discernible name</td>
      <td>3</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>list</td>
      <td>Lists contain only <code>&lt;li&gt;</code> elements and script supporting elements (<code>&lt;script&gt;</code> and <code>&lt;template&gt;</code>).</td>
      <td>3</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>listitem</td>
      <td>List items (<code>&lt;li&gt;</code>) are contained within <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> parent elements</td>
      <td>3</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>heading-order</td>
      <td>Heading elements are not in a sequentially-descending order</td>
      <td>2</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <th colspan="4">
        SEO
      </th>
    </tr>
    <tr>
      <td>document-title</td>
      <td>Document has a <code>&lt;title&gt;</code> element</td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>meta-description</td>
      <td>Document has a meta description</td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>link-text</td>
      <td>Links have descriptive text</td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>hreflang</td>
      <td>Document has a valid <code>hreflang</code></td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>canonical</td>
      <td>Document has a valid <code>rel=canonical</code></td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>http-status-code</td>
      <td>Page has successful HTTP status code</td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>crawlable-anchors</td>
      <td>Links are crawlable</td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>is-crawlable</td>
      <td>Page isn't blocked from indexing</td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>robots-txt</td>
      <td>robots.txt is valid</td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>viewport</td>
      <td>Has a <code>&lt;meta name="viewport"&gt;</code> tag with <code>width</code> or <code>initial-scale</code></td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>font-size</td>
      <td>Document uses legible font sizes</td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <td>tap-targets</td>
      <td>Tap targets are not sized appropriately</td>
      <td>1</td>
      <td>Lighthouse</td>
    </tr>
    <tr>
      <th colspan="4">
        Content
      </th>
    </tr>
  </table>
</details>

## Todo

This is a list of todo items in order to launch Binoculars wep pages and the NPM package.

<details>
  <summary>Expand here to see list</summary>

- [x] Take a final pass at [`auditRefsConfig.js`](./src/auditRefsConfig.js) to make sure we aren't missing any.
- [x] SEO category description.
- [x] Create a JSON file to list all metrics and groups that will have pages on Foo.
- [x] Create JSON files for each page from the above with all content to be rendered. Also create one for the SEO category.
  - [x] Create a "definitions" directory. Utilize Puppeteer to get content for all definitions and append title and description from `config/audits`.
- [ ] Pages for each metric.
- [ ] Page about SEO.
- [ ] Define new metrics for new content group and weighting.
- [ ] Re-evaluate and update weighting.
- [ ] Create [custom audits](https://github.com/GoogleChrome/lighthouse/tree/master/docs/recipes/custom-audit) for new metrics.
- [ ] Generate HTML report with updated links and other formatting.
- [ ] Report upload functionality.
- [ ] [Integration testing](https://github.com/GoogleChrome/lighthouse/tree/master/docs/recipes/integration-test).
- [ ] Finalize NPM package.
- [ ] Website updates and new page for Binoculars. Create a new audit flow for Binoculars.
- [ ] GitHub Action
- [ ] Article
</details>
