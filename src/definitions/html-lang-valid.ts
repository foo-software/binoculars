export default [
  `<p>To ensure correct pronunciation,
screen readers use a different sound library
for each language they support.
Screen readers can switch between these language libraries easily,
but only if a web page specifies which language to read
for a given piece of content.</p>`,
  `<p>To ensure correct pronunciation of the page as a whole,
you must specify a valid
<a href="https://www.w3.org/International/questions/qa-choosing-language-tags#question" rel="noopener">BCP 47 language</a>
for the <code>&lt;html&gt;</code> element.</p>`,
  `<h2>How the Lighthouse invalid <code>&lt;html&gt;</code> <code>lang</code> value audit fails <a class="w-headline-link" href="#how-the-lighthouse-invalid-lesshtmlgreater-lang-value-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>
flags pages whose <code>&lt;html&gt;</code> element doesn't have a valid value
for its <code>lang</code> attribute:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/html-lang-valid/html-lang-valid.png" alt="Lighthouse audit showing the html element has an invalid value for its lang attribute">
</figure>`,
  `<p>Note that the <a href="/html-has-lang"><strong><code>&lt;html&gt;</code> element does not have a <code>[lang]</code> attribute</strong> audit</a>
checks whether a <code>lang</code> attribute is present.
This audit checks whether the <em>value</em> for that attribute is valid.</p>`,
  `<h2>How to fix an invalid HTML <code>lang</code> attribute <a class="w-headline-link" href="#how-to-fix-an-invalid-html-lang-attribute" aria-hidden="true">#</a></h2>`,
  `<p>To ensure your page's content is pronounced correctly for screen reader users,
use a <a href="https://www.w3.org/International/questions/qa-choosing-language-tags#question" rel="noopener">valid language code</a>
in the <code>lang</code> attribute of the <code>&lt;html&gt;</code> element.</p>`,
  `<p>For example, this sample code sets the language of the document to English:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/html-lang-valid.js" rel="noopener">Source code for <strong><code>&lt;html&gt;</code> element does not have a valid value for its <code>[lang]</code> attribute</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/html-lang-valid" rel="noopener">&lt;html&gt; element must have a valid value for the lang attribute (Deque University)</a></li>
<li><a href="https://web.dev/html-lang-valid/" rel="noopener"><html> element does not have a valid value for its [lang] attribute</a></li></ul>`,
];
