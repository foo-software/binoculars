export default [
  `<p>Link text that is discernible, unique, and focusable
improves the navigation experience for users of screen readers
and other assistive technologies.</p>`,
  `<h2>How this Lighthouse audit fails <a class="w-headline-link" href="#how-this-lighthouse-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags links that don't have discernible names:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/link-name/link-name.png" alt="Lighthouse audit showing links do not have discernible names">
</figure>`,
  `<h2>How to add accessible names to links <a class="w-headline-link" href="#how-to-add-accessible-names-to-links" aria-hidden="true">#</a></h2>`,
  `<p>Similar to buttons,
links primarily get their accessible name from their text content.
Avoid filler words like "Here" or "Read more";
instead, put the most meaningful text into the link itself:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html">Check out <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>…<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>our guide to creating accessible web pages<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>.<br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>Learn more in
<a href="/labels-and-text-alternatives#label-buttons-and-links">Label buttons and links</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/link-name.js">Source code for <strong>Links do not have a discernible name</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/link-name">Links must have discernible text (Deque University)</a></li>
<li><a href="https://web.dev/link-name/" rel="noopener">Links do not have a discernible name</a></li></ul>`,
];
