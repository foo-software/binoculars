export default [
  `<p>Having a <code>&lt;title&gt;</code> element on every page helps all your users:</p>`,
  `<ul>
<li>Search engine users rely on the title to determine whether a page is
relevant to their search.</li>
<li>The title also gives users of screen readers and other assistive technologies
an overview of the page. The title is the first text
that an assistive technology announces.</li>
</ul>`,
  `<h2>How the Lighthouse title audit fails <a class="w-headline-link" href="#how-the-lighthouse-title-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags pages
without a <code>&lt;title&gt;</code> element in the page's <code>&lt;head&gt;</code>:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/document-title/document-title.png" alt="Lighthouse audit showing HTML document doesn't have a title elemement">
</figure>`,
  `<h2>How to add a title <a class="w-headline-link" href="#how-to-add-a-title" aria-hidden="true">#</a></h2>`,
  `<p>Add a <code>&lt;title&gt;</code> element to the <code>&lt;head&gt;</code> of your page. Make sure the title
clearly states what the page is about. For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token name">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><br>      …<br>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>20-week training schedule for your first marathon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><br>      …<br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><br>    …<br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Tips for creating great titles <a class="w-headline-link" href="#tips-for-creating-great-titles" aria-hidden="true">#</a></h2>`,
  `<ul>
<li>Use a unique title for each page.</li>
<li>Make titles descriptive and concise. Avoid vague titles like "Home."</li>
<li>Avoid <a href="https://support.google.com/webmasters/answer/66358">keyword stuffing</a>.
It doesn't help users, and search engines may mark the page as spam.</li>
<li>It's OK to brand your titles, but do so concisely.</li>
</ul>`,
  `<p>Here are examples of good and bad titles:</p>`,
  `<figure>
  <p class="w-compare__label w-compare__label--worse">
    Don't
  </p>
<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Donut recipe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>  <figcaption class="w-compare__caption"> <p> Too vague. </p> </figcaption>
</figure>`,
  `<figure>
  <p class="w-compare__label w-compare__label--better">
    Do
  </p>
<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Mary's quick maple bacon donut recipe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>  <figcaption class="w-compare__caption"> <p> Descriptive yet concise. </p> </figcaption>
</figure>`,
  `<p>See Google's <a href="https://support.google.com/webmasters/answer/35624">Create good titles and snippets in Search Results</a>
page for more details about these tips.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/document-title.js">Source code for <strong>Document has a <code>&lt;title&gt;</code> element</strong> audit</a></li>
<li><a href="https://support.google.com/webmasters/answer/35624">Create good titles and snippets in Search Results</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.2/document-title">Documents must contain a title element to aid in navigation (Deque University)</a></li>
<li><a href="https://support.google.com/webmasters/answer/66358">Irrelevant keywords</a></li>
<li><a href="/labels-and-text-alternatives#label-documents-and-frames">Label documents and frames</a></li>
<li><a href="https://web.dev/document-title/" rel="noopener">Document doesn't have a <title> element</a></li></ul>`,
];
