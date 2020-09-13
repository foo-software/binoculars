export default [
  `<p>The <code>user-scalable="no"</code> parameter for the <code>&lt;meta name="viewport"&gt;</code> element
disables browser zoom on a web page.
The <code>maximum-scale</code> parameter limits the amount the user can zoom.
Both are problematic for users with low vision who rely on browser zoom
to see the contents of a web page.</p>`,
  `<h2>How the Lighthouse browser zoom audit fails <a class="w-headline-link" href="#how-the-lighthouse-browser-zoom-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags pages that disable browser zooming:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/meta-viewport/meta-viewport.png" alt="Lighthouse audit showing the viewport disables text scaling and zooming">
</figure>`,
  `<p>A page fails the audit if it contains a <code>&lt;meta name="viewport"&gt;</code> tag with either of the following:</p>`,
  `<ul>
<li>A <code>content</code> attribute with a <code>user-scalable="no"</code> parameter</li>
<li>A <code>content</code> attribute with a <code>maximum-scale</code> parameter set to less than <code>5</code></li>
</ul>`,
  `<h2>How to avoid disabling browser zoom <a class="w-headline-link" href="#how-to-avoid-disabling-browser-zoom" aria-hidden="true">#</a></h2>`,
  `<p>Remove the <code>user-scalable="no"</code> parameter from the viewport meta tag and
make sure the <code>maximum-scale</code> parameter is set to <code>5</code> or greater.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/meta-viewport.js">Source code for <strong><code>[user-scalable="no"]</code> is used in the <code>&lt;meta name="viewport"&gt;</code> element or the <code>[maximum-scale]</code> attribute is less than 5</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/meta-viewport">Zooming and scaling must not be disabled (Deque University)</a></li>
<li><a href="https://web.dev/meta-viewport/" rel="noopener">[user-scalable="no"] is used in the <meta name="viewport"> element or the [maximum-scale] attribute is less than 5</a></li></ul>`,
];
