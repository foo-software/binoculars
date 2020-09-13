export default [
  `<p>The <code>&lt;meta http-equiv="refresh"&gt;</code> tag causes a web page to refresh automatically
after a specified amount of time.
Users generally don't expect automatic refreshes,
so they can be disorienting.
Refreshing also moves <a href="/keyboard-access/#focus-and-the-tab-order">focus</a>
to the top of the page,
which may frustrate or confuse users,
particularly those who rely on screen readers or other assistive technologies.</p>`,
  `<h2>How the Lighthouse automatic refresh audit fails <a class="w-headline-link" href="#how-the-lighthouse-automatic-refresh-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags pages that contain a <code>&lt;meta&gt;</code> tag with the <code>http-equiv="refresh"</code> attribute:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/meta-refresh/meta-refresh.png" alt="Lighthouse audit showing the document uses timed refresh">
</figure>`,
  `<h2>How to avoid automatic page refreshes <a class="w-headline-link" href="#how-to-avoid-automatic-page-refreshes" aria-hidden="true">#</a></h2>`,
  `<p>Remove <code>&lt;meta http-equiv="refresh"&gt;</code> from the page.</p>`,
  `<p>If you need to refresh your page, do so using JavaScript,
where you can add logic to allow users to pause the refresh,
extend the time between refreshes, or even disable refreshes.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/meta-refresh.js">Source code for <strong>The document uses <code>&lt;meta http-equiv="refresh"&gt;</code></strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/meta-refresh">Timed refresh must not exist (Deque University)</a></li>
<li><a href="https://web.dev/meta-refresh/" rel="noopener">The document uses <meta http-equiv="refresh"></a></li></ul>`,
];
