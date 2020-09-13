export default [
  `<p>When multiple pages have similar content, search engines consider them duplicate
versions of the same page. For example, desktop and mobile versions of a product
page are often considered duplicates.</p>`,
  `<p>Search engines select one of the pages as the <em>canonical</em>, or primary, version
and <strong>crawl</strong> that one more. Valid canonical links let you tell search engines
which version of a page to crawl and display to users in search results.</p>`,
  `<p>Using canonical links has many advantages:</p>`,
  `<ul>
<li>It helps search engines consolidate multiple URLs into a single, preferred URL. For example,
if other sites put query parameters on the ends of links to your page, search engines
consolidate those URLs to your preferred version.</li>
<li>It simplifies tracking methods. Tracking one URL is easier than tracking many.</li>
<li>It improves the page ranking of syndicated content by consolidating the syndicated links to
your original content back to your preferred URL.</li>
</ul>`,
  `<h2>How the Lighthouse canonical links audit fails <a class="w-headline-link" href="#how-the-lighthouse-canonical-links-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags any page
with an invalid canonical link:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/canonical/canonical.png" alt="Lighthouse audit showing document with invalid canonical link">
</figure>`,
  `<p>A page fails this audit if any of the following conditions are met:</p>`,
  `<ul>
<li>There is more than one canonical link.</li>
<li>The canonical link is not a valid URL.</li>
<li>The canonical link points to a page for a different region or language.</li>
<li>The canonical link points to a different domain.</li>
<li>The canonical link points to the site root. Note that this scenario may be
valid in some scenarios, such as for AMP or mobile page variations, but
Lighthouse nonetheless treats it as a failure.</li>
</ul>`,
  `<h2>How to add canonical links to your pages <a class="w-headline-link" href="#how-to-add-canonical-links-to-your-pages" aria-hidden="true">#</a></h2>`,
  `<p>There are two options for specifying a canonical link.</p>`,
  `<p><strong>Option 1:</strong> Add a <code>&lt;link rel=canonical&gt;</code> element to the <code>&lt;head&gt;</code> of the page:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="highlight-line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token name">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line">    …</span><br><mark class="highlight-line highlight-line-active">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canonical<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.com<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span></mark><br><span class="highlight-line">    …</span><br><span class="highlight-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line">    …</span><br><span class="highlight-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span></code></pre>
</web-copy-code>`,
  `<p><strong>Option 2:</strong> Add a <code>Link</code> header to the HTTP response:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html">Link: https://example.com; rel=canonical</code></pre>
</web-copy-code>`,
  `<p>For a list of the pros and cons of each approach, see
Google's <a href="https://support.google.com/webmasters/answer/139066">Consolidate duplicate URLs</a>
page.</p>`,
  `<h3>General guidelines <a class="w-headline-link" href="#general-guidelines" aria-hidden="true">#</a></h3>`,
  `<ul>
<li>Make sure that the canonical URL is valid.</li>
<li>Use secure <a href="https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https">HTTPS</a> canonical URLs rather than HTTP whenever possible.</li>
<li>If you use <a href="/hreflang"><code>hreflang</code> links</a> to serve different versions of a page
depending on a user's language or country, make sure that the canonical URL
points to the   proper page for that respective language or country.</li>
<li>Don't point the canonical URL to a different domain. Yahoo and Bing don't
allow this.</li>
<li>Don't point lower-level pages to the site's root page unless their content is
the same.</li>
</ul>`,
  `<h3>Google-specific guidelines <a class="w-headline-link" href="#google-specific-guidelines" aria-hidden="true">#</a></h3>`,
  `<ul>
<li>Use the <a href="https://search.google.com/search-console/index">Google Search Console</a>
to see which URLs Google considers canonical or duplicative across your entire
site.</li>
<li>Don't use Google's URL removal tool for canonization. It removes <em>all</em> versions
of a URL from search.</li>
</ul>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/seo/canonical.js">Source code for <strong>Document does not have a valid <code>rel=canonical</code></strong> audit</a></li>
<li><a href="https://webmasters.googleblog.com/2013/04/5-common-mistakes-with-relcanonical.html">5 common mistakes with rel=canonical</a></li>
<li><a href="https://support.google.com/webmasters/answer/139066">Consolidate duplicate URLs</a></li>
<li><a href="https://support.google.com/webmasters/answer/6080548">Block crawling of parameterized duplicate content</a></li>
<li><a href="https://search.google.com/search-console/index">Google Search Console</a></li>
<li><a href="https://web.dev/canonical/" rel="noopener">Document does not have a valid rel=canonical</a></li></ul>`,
];
