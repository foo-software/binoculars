export default [
  `<p>Search engines can only show pages in their search results if those pages don't
explicitly block indexing by search engine crawlers. Some HTTP headers and meta
tags tell crawlers that a page shouldn't be indexed.</p>`,
  `<p>Only block indexing for content that you don't want to appear in search results.</p>`,
  `<h2>How the Lighthouse indexing audit fails <a class="w-headline-link" href="#how-the-lighthouse-indexing-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags pages
that search engines can't index:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/is-crawable/is-crawable.png" alt="Lighthouse audit showing search engines can't index your page">
</figure>`,
  `<p>Lighthouse only checks for headers or elements that block <em>all</em> search engine
crawlers. For example, the <code>&lt;meta&gt;</code> element below prevents all search engine
crawlers (also known as robots) from accessing your page:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>robots<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noindex<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>This HTTP response header also blocks all crawlers:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html">X-Robots-Tag: noindex</code></pre>
</web-copy-code>`,
  `<p>You might also have <code>&lt;meta&gt;</code> elements that block specific crawlers, such as:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AdsBot-Google<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noindex<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>Lighthouse doesn't check for crawler-specific directives like this, but they can
still make your page harder to discover, so use them with caution.</p>`,
  `<h2>How to ensure search engines can crawl your page <a class="w-headline-link" href="#how-to-ensure-search-engines-can-crawl-your-page" aria-hidden="true">#</a></h2>`,
  `<p>First make sure you want search engines to index the page. Some pages, like
<a href="https://support.google.com/webmasters/answer/156184?hl=en&amp;ref_topic=4581190">sitemaps</a>
or legal content, generally shouldn't be indexed. (Keep in mind that blocking
indexing doesn't prevent users from accessing a page if they know its URL.)</p>`,
  `<p>For pages that you want indexed, remove any HTTP headers or <code>&lt;meta&gt;</code> elements
that are blocking search engine crawlers. Depending on how you set up your site,
you might need to do some or all of the steps below:</p>`,
  `<ul>
<li>Remove the <code>X-Robots-Tag</code> HTTP response header if you set up a HTTP
response header:</li>
</ul>`,
  `<web-copy-code><pre class="language-text"><code class="language-text">X-Robots-Tag: noindex</code></pre>
</web-copy-code>`,
  `<ul>
<li>Remove the following meta tag if it's present in the head of the page:</li>
</ul>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>robots<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noindex<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<ul>
<li>Remove meta tags that block specific crawlers if these tags are present in the
head of the page. For example:</li>
</ul>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Googlebot<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noindex<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Add additional control (optional) <a class="w-headline-link" href="#add-additional-control-(optional)" aria-hidden="true">#</a></h2>`,
  `<p>You may want more control over how search engines index your page. (For example,
maybe you don't want Google to index images, but you do want the rest of the page
indexed.)</p>`,
  `<p>For information about how to configure your <code>&lt;meta&gt;</code> elements and HTTP
headers for specific search engines, see these guides:</p>`,
  `<ul>
<li><a href="https://developers.google.com/search/reference/robots_meta_tag">Google Search</a></li>
<li><a href="https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240">Bing</a></li>
<li><a href="https://yandex.com/support/webmaster/controlling-robot/html.html">Yandex</a></li>
</ul>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/seo/is-crawlable.js">Source code for <strong>Page is blocked from indexing</strong> audit</a></li>
<li>Google's <a href="https://developers.google.com/search/reference/robots_meta_tag">Robots meta tag and X-Robots-Tag HTTP header specifications</a></li>
<li>Bing's <a href="https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240">Robots Metatags</a></li>
<li>Yandex's <a href="https://yandex.com/support/webmaster/controlling-robot/html.html">Using HTML elements</a></li>
<li><a href="https://web.dev/is-crawable/" rel="noopener">Page is blocked from indexing</a></li></ul>`,
];
