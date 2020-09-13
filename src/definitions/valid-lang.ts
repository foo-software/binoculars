export default [
  `<p>To ensure correct pronunciation,
screen readers use a different sound library
for each language they support.
Screen readers can switch between these language libraries easily,
but only if a web page specifies which language to read
for a given piece of content.</p>`,
  `<p>If the language changes within your page,
you must specify a valid
<a href="https://www.w3.org/International/questions/qa-choosing-language-tags#question" rel="noopener">BCP 47 language</a>
to ensure that the section in the new language is pronounced correctly.</p>`,
  `<h2>How the Lighthouse invalid <code>lang</code> attribute audit fails <a class="w-headline-link" href="#how-the-lighthouse-invalid-lang-attribute-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>
flags elements that have a <code>lang</code> attribute with an invalid value:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/valid-lang/valid-lang.png" alt="Lighthouse audit showing elements with an invalid value for the lang attribute">
</figure>`,
  `<h2>How to fix invalid <code>lang</code> attribute values <a class="w-headline-link" href="#how-to-fix-invalid-lang-attribute-values" aria-hidden="true">#</a></h2>`,
  `<p>Use only valid
<a href="https://www.w3.org/International/questions/qa-choosing-language-tags#question" rel="noopener">BCP 47 language codes</a>
in all <code>lang</code> attribute values.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/valid-lang.js" rel="noopener">Source code for <strong><code>[lang]</code> attributes do not have a valid value</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/valid-lang" rel="noopener">lang attribute must have a valid value (Deque University)</a></li>
<li><a href="https://web.dev/valid-lang/" rel="noopener">[lang] attributes do not have a valid value</a></li></ul>`,
];
