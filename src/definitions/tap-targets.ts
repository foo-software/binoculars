export default [
  `<p>Tap targets are the areas of a web page that users on touch devices can
interact with. Buttons, links, and form elements all have tap targets.</p>`,
  `<p>Many search engines rank pages based on how mobile-friendly they are. Making
sure tap targets are big enough and far enough apart from each other makes
your page more mobile-friendly and accessible.</p>`,
  `<h2>How the Lighthouse tap targets audit fails <a class="w-headline-link" href="#how-the-lighthouse-tap-targets-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags pages
with tap targets that are too small or too close together:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/tap-targets/tap-targets.png" alt="Lighthouse audit showing inappropriately sized tap targets">
</figure>`,
  `<p>Targets that are smaller than 48&nbsp;px by 48&nbsp;px or closer than 8&nbsp;px
apart fail the audit. When the audit fails, Lighthouse lists the results in a
table with three columns:</p>`,
  `<div>
  <table>
    <tbody>
      <tr>
        <td><strong>Tap Target</strong></td>
        <td>The tap target that is inappropriately sized.</td>
      </tr>
      <tr>
        <td><strong>Size</strong></td>
        <td>The size of the target's bounding rectangle in pixels.</td>
      </tr>
      <tr>
        <td><strong>Overlapping Target</strong></td>
        <td>Which other tap targets, if any, are too close.</td>
      </tr>
    </tbody>
  </table>
</div>`,
  `<h2>How to fix your tap targets <a class="w-headline-link" href="#how-to-fix-your-tap-targets" aria-hidden="true">#</a></h2>`,
  `<p><strong>Step 1:</strong> Increase the size of tap targets that are too small.
Tap targets that are 48&nbsp;px by 48&nbsp;px never fail the audit. If you have
elements that shouldn't <em>appear</em> any bigger (for example, icons), try increasing
the <code>padding</code> property:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/tap-targets/touch-target.jpg" alt="Appropriately-sized tap targets">
  <figcaption class="w-figcaption">
    Use <code>padding</code> to make tap targets bigger without changing the appearance of an element.
  </figcaption>
</figure>`,
  `<p><strong>Step 2:</strong> Increase the spacing between tap targets that are too close together
using properties like <code>margin</code>. There should be at least 8&nbsp;px between
tap targets.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="/accessible-tap-targets">Accessible tap targets</a>: more information on how to ensure your tap targets are accessible by all users.</li>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/seo/tap-targets.js">Source code for <strong>Tap targets are not sized appropriately</strong> audit</a></li>
<li><a href="https://web.dev/tap-targets/" rel="noopener">Tap targets are not sized appropriately</a></li></ul>`,
];
