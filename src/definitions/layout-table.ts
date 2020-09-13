export default [
  `<p>Tables used for layout purposes shouldn't include data elements:
<code>&lt;th&gt;</code> element, <code>&lt;caption&gt;</code> element or <code>summary</code> attribute.</p>`,
  `<h2>How this Lighthouse audit fails <a class="w-headline-link" href="#how-this-lighthouse-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags layout <code>&lt;table&gt;</code> elements that use <code>&lt;th&gt;</code>, <code>&lt;caption&gt;</code>, or <code>summary</code>:</p>`,
  `<h2>How to make presentational tables accessible <a class="w-headline-link" href="#how-to-make-presentational-tables-accessible" aria-hidden="true">#</a></h2>`,
  `<p>It's simple to pass the Lighthouse audit:
remove data elements (<code>&lt;th&gt;</code>, <code>&lt;caption&gt;</code> elements or the <code>summary</code> attribute) from layout tables.</p>`,
  `<p>If using a table just for visual layout, and not for tabular data,
the better fix is to remove the table all together,
and use cascading style sheets (CSS) to control layout instead.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/layout-table.js">Source code for <strong>Presentational <code>&lt;table&gt;</code> elements do not avoid using <code>&lt;th&gt;</code>, <code>&lt;caption&gt;</code>, or the <code>[summary]</code> attribute</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/layout-table">Layout tables must not use data table elements (Deque University)</a></li>
<li><a href="https://web.dev/layout-table/" rel="noopener">Presentational <table> elements do not avoid using <th>, <caption>, or the [summary] attribute</a></li></ul>`,
];
