export default [
  `<p>To ensure correct pronunciation,
screen readers use a different sound library
for each language they support.
Screen readers can switch between these language libraries easily,
but only if a web page specifies which language to read
for a given piece of content.</p>`,
  `<p>If a page doesn't specify a language for the <code>&lt;html&gt;</code> element,
a screen reader assumes the page is in the default language
that the user chose when setting up the screen reader,
often making it impossible to understand the content.</p>`,
  `<h2>How the Lighthouse missing <code>&lt;html&gt;</code> <code>lang</code> audit fails <a class="w-headline-link" href="#how-the-lighthouse-missing-lesshtmlgreater-lang-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>
flags pages whose <code>&lt;html&gt;</code> element doesn't have a <code>lang</code> attribute:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/html-has-lang/html-has-lang.png" alt="Lighthouse audit showing the html element doesn't have a lang attribute">
</figure>`,
  `<p>Note that this audit
checks whether a <code>lang</code> attribute is present.
The <a href="/html-lang-valid"><strong><code>&lt;html&gt;</code> element does not have a valid value for its <code>[lang]</code> attribute</strong> audit</a>
checks whether the <em>value</em> for that attribute is valid.</p>`,
  `<h2>How to add an HTML <code>lang</code> attribute <a class="w-headline-link" href="#how-to-add-an-html-lang-attribute" aria-hidden="true">#</a></h2>`,
  `<p>To ensure your page's content is pronounced correctly for screen reader users,
use a <a href="https://www.w3.org/International/questions/qa-choosing-language-tags#question" rel="noopener">valid language code</a>
in the <code>lang</code> attribute of the <code>&lt;html&gt;</code> element.</p>`,
  `<p>For example, this sample code sets the language of the document to English:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/html-has-lang.js" rel="noopener">Source code for <strong><code>&lt;html&gt;</code> element does not have a <code>[lang]</code> attribute</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/html-has-lang" rel="noopener"><code>&lt;html&gt;</code> element must have a lang attribute (Deque University)</a></li>
<li><a href="https://web.dev/html-has-lang/" rel="noopener"><html> element does not have a [lang] attribute</a></li></ul>`,
];
