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
</table>
