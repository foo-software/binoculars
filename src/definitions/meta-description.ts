export default [
  `<p>The <code>&lt;meta name="description"&gt;</code> element provides a summary of a page's content
that search engines include in search results. A high-quality, unique meta
description makes your page appear more relevant and can increase your search
traffic.</p>`,
  `<h2>How the Lighthouse meta description audit fails <a class="w-headline-link" href="#how-the-lighthouse-meta-description-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags pages
without a meta description:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/meta-description/meta-description.png" alt="Lighthouse audit showing the document doesn't have a meta description">
</figure>`,
  `<p>The audit fails if:</p>`,
  `<ul>
<li>Your page doesn't have a <code>&lt;meta name=description&gt;</code> element.</li>
<li>The <code>content</code> attribute of the <code>&lt;meta name=description&gt;</code> element is empty.</li>
</ul>`,
  `<p>Lighthouse doesn't evaluate the quality of your description.</p>`,
  `<h2>How to add a meta description <a class="w-headline-link" href="#how-to-add-a-meta-description" aria-hidden="true">#</a></h2>`,
  `<p>Add a <code>&lt;meta name=description&gt;</code> element to the <code>&lt;head&gt;</code> of each of your pages:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Put your description here.<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>If appropriate, include clearly tagged facts in the descriptions. For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Author: A.N. Author,<br>    Illustrator: P. Picture, Category: Books, Price: $17.99,<br>    Length: 784 pages<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Meta description best practices <a class="w-headline-link" href="#meta-description-best-practices" aria-hidden="true">#</a></h2>`,
  `<ul>
<li>Use a unique description for each page.</li>
<li>Make descriptions clear and concise. Avoid vague descriptions like "Home."</li>
<li>Avoid <a href="https://support.google.com/webmasters/answer/66358">keyword stuffing</a>.
It doesn't help users, and search engines may mark the page as spam.</li>
<li>Descriptions don't have to be complete sentences; they can contain structured
data.</li>
</ul>`,
  `<p>Here are examples of good and bad descriptions:</p>`,
  `<figure>
  <p class="w-compare__label w-compare__label--worse">
    Don't
  </p>
<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>A donut recipe.<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>  <figcaption class="w-compare__caption"> <p> Too vague. </p> </figcaption>
</figure>`,
  `<figure>
  <p class="w-compare__label w-compare__label--better">
    Do
  </p>
<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span><br>  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span>           <br>  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Mary<span class="token punctuation">'</span>s simple recipe for maple bacon donuts<br>           makes a sticky, sweet treat with just a hint<br>           of salt that you<span class="token punctuation">'</span>ll keep coming back for.<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>  <figcaption class="w-compare__caption"> <p> Descriptive yet concise. </p> </figcaption>
</figure>`,
  `<p>See Google's <a href="https://support.google.com/webmasters/answer/35624#1">Create good titles and snippets in Search Results</a>
page for more tips.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/seo/meta-description.js">Source code for <strong>Document does not have a meta description</strong> audit</a></li>
<li><a href="https://support.google.com/webmasters/answer/35624#1">Create good titles and snippets in Search Results</a></li>
<li><a href="https://support.google.com/webmasters/answer/66358">Irrelevant keywords</a></li>
<li><a href="https://web.dev/meta-description/" rel="noopener">Document does not have a meta description</a></li></ul>`,
];
