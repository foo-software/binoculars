# `@foo-software/binoculars`

A tool to measure web page SEO friendliness.

## Metrics

Below are metrics we'll pull together and weights to generate a report. Most metrics come from Lighthouse, but we have some custom ones as well.

<table>
  <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Weight</th>
    <th>Source</th>
  </tr>
  <tr>
    <td colspan="4">
      Performance
    </td>
  </tr>
  <tr>
    <td>largest-contentful-paint</td>
    <td>Largest Contentful Paint</td>
    <td>25</td>
    <td>Lighthouse</td>
  </tr>
  <tr>
    <td>total-blocking-time</td>
    <td>Total Blocking Time</td>
    <td>25</td>
    <td>Lighthouse</td>
  </tr>
  <tr>
    <td>first-contentful-paint</td>
    <td>First Contentful Paint</td>
    <td>15</td>
    <td>Lighthouse</td>
  </tr>
  <tr>
    <td>interactive</td>
    <td>Time to Interactive</td>
    <td>15</td>
    <td>Lighthouse</td>
  </tr>
  <tr>
    <td>speed-index</td>
    <td>Speed Index</td>
    <td>15</td>
    <td>Lighthouse</td>
  </tr>
  <tr>
    <td>cumulative-layout-shift</td>
    <td>Cumulative Layout Shift</td>
    <td>5</td>
    <td>Lighthouse</td>
  </tr>
  <tr>
    <td colspan="4">
      Accessibility
    </td>
  </tr>
  <tr>
    <td>aria-hidden-body</td>
    <td><code>[aria-hidden="true"]</code> is not present on the document <code>body</code></td>
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
    <td>Elements with an ARIA <code>[role]</code> that require children to contain a specific `[role]` have all required children.</td>
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
    <td>document-title</td>
    <td>Document has a </code>title</code> element</td>
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
    <td>html-has-lang</td>
    <td><code>html</code> element has a <code>[lang]</code> attribute</td>
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
    <td>image-alt</td>
    <td>Image elements have <code>[alt]</code> attributes</td>
    <td>10</td>
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
    <td>Lists contain only <code>li</code> elements and script supporting elements (<code>script</code> and <code>template</code>).</td>
    <td>3</td>
    <td>Lighthouse</td>
  </tr>
  <tr>
    <td>listitem</td>
    <td>List items (<code>li</code>) are contained within <code>ul</code> or <code>ol</code> parent elements</td>
    <td>3</td>
    <td>Lighthouse</td>
  </tr>
  <tr>
    <td>meta-viewport</td>
    <td><code>[user-scalable=\"no\"]</code> is not used in the <code>&lt;meta name="viewport"&gt;</code> element and the <code>[maximum-scale]</code> attribute is not less than 5.</td>
    <td>10</td>
    <td>Lighthouse</td>
  </tr>
</table>
