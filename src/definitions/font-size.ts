export default [
  `<p>Many search engines rank pages based on how mobile-friendly they are. Font
sizes smaller than 12&nbsp;px are often difficult to read on mobile devices
and may require users to zoom in to display text at a comfortable reading size.</p>`,
  `<h2>How the Lighthouse font size audit fails <a class="w-headline-link" href="#how-the-lighthouse-font-size-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags pages
with font sizes that are too small to read easily on mobile:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/font-size/font-size.png" alt="Lighthouse audit showing page has illegible font sizes">
</figure>`,
  `<p>Lighthouse flags pages on which 60% or more of the text has a font size smaller
than 12&nbsp;px. When a page fails the audit, Lighthouse lists the results in a
table with four columns:</p>`,
  `<div>
  <table>
    <tbody>
      <tr>
        <td><strong>Source</strong></td>
        <td>The source location of the CSS ruleset that is causing the illegible text.</td>
      </tr>
      <tr>
        <td><strong>Selector</strong></td>
        <td>The selector of the ruleset.</td>
      </tr>
      <tr>
        <td><strong>% of Page Text</strong></td>
        <td>The percentage of text on the page that is affected by the ruleset.</td>
      </tr>
      <tr>
        <td><strong>Font Size</strong></td>
        <td>The computed size of the text.</td>
      </tr>
    </tbody>
  </table>
</div>`,
  `<h2>How to fix illegible fonts <a class="w-headline-link" href="#how-to-fix-illegible-fonts" aria-hidden="true">#</a></h2>`,
  `<p>Check font sizes in your CSS. Aim to have a font size of at least 12&nbsp;px on
at least 60% of the text on your page.</p>`,
  `<h2>How to fix a missing viewport config <a class="w-headline-link" href="#how-to-fix-a-missing-viewport-config" aria-hidden="true">#</a></h2>`,
  `<p>If Lighthouse reports <code>Text is illegible because of a missing viewport config</code>,
add a <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code>
tag to the <code>&lt;head&gt;</code> of your document.</p>`,
  `<p>See the <a href="/viewport">Does not have a <code>&lt;meta name="viewport"&gt;</code> tag with <code>width</code> or <code>initial-scale</code></a>
post for more information.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/seo/font-size.js">Source code for <strong>Document does not use legible font sizes</strong> audit</a><li><a href="https://web.dev/font-size/" rel="noopener">Document doesn't use legible font sizes</a></li></p>`,
];
