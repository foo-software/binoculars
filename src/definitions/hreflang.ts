export default [
  `<p>Many sites provide different versions of a page based on a user's language or
region. <code>hreflang</code> links tell search engines the URLs for all the versions of
a page so that they can display the correct version for each language or region.</p>`,
  `<h2>How the Lighthouse <code>hreflang</code> audit fails <a class="w-headline-link" href="#how-the-lighthouse-hreflang-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags
incorrect <code>hreflang</code> links:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/hreflang/hreflang.png" alt="Lighthouse audit showing incorrect hreflang links">
</figure>`,
  `<p>Lighthouse checks for <code>hreflang</code> links
in the page's <code>head</code> and in its <a href="https://developer.mozilla.org/en-US/docs/Glossary/Response_header">response headers</a>.</p>`,
  `<p>Lighthouse then checks for valid language codes within the <code>hreflang</code>links.
Lighthouse reports any <code>hreflang</code> links with invalid language codes.</p>`,
  `<p>Lighthouse does not check region codes or your <a href="(https://support.google.com/webmasters/answer/156184)">sitemap</a>.</p>`,
  `<h2>How to define an <code>hreflang</code> link for each version of a page <a class="w-headline-link" href="#how-to-define-an-hreflang-link-for-each-version-of-a-page" aria-hidden="true">#</a></h2>`,
  `<p>Suppose that you have three versions of a page:</p>`,
  `<ul>
<li>An English version at <code>https://example.com</code></li>
<li>A Spanish version at <code>https://es.example.com</code></li>
<li>A German version at <code>https://de.example.com</code></li>
</ul>`,
  `<p>There are three ways to tell search engines that these pages are equivalent.
Choose whichever method is easiest for your situation.</p>`,
  `<p><strong>Option 1:</strong> Add <code>hreflang</code> links to the <code>&lt;head&gt;</code> of each page:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alternate<span class="token punctuation">"</span></span> <span class="token attr-name">hreflang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.com<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alternate<span class="token punctuation">"</span></span> <span class="token attr-name">hreflang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>es<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://es.example.com<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alternate<span class="token punctuation">"</span></span> <span class="token attr-name">hreflang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>de<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://de.example.com<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>Each version of a page must link to all other versions,
<strong>including itself</strong>. Otherwise, search engines may ignore the <code>hreflang</code> links
or interpret them incorrectly.</p>`,
  `<p>For pages that allow users to select their language, use the <code>x-default</code>
keyword:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alternate<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.com<span class="token punctuation">"</span></span> <span class="token attr-name">hreflang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>x-default<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p><strong>Option 2:</strong> Add <code>Link</code> headers to your HTTP response:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html">Link: &lt;https://example.com&gt;; rel="alternate"; hreflang="en", &lt;https://es.example.com&gt;;<br>rel="alternate"; hreflang="es", &lt;https://de.example.com&gt;; rel="alternate"; hreflang="de"</code></pre>
</web-copy-code>`,
  `<p><strong>Option 3:</strong> Add language version information to your <a href="(https://support.google.com/webmasters/answer/156184)">sitemap</a>.</p>`,
  `<web-copy-code><pre class="language-xml"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>loc</span><span class="token punctuation">&gt;</span></span>https://example.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>loc</span><span class="token punctuation">&gt;</span></span><br><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xhtml:</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alternate<span class="token punctuation">"</span></span> <span class="token attr-name">hreflang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>es<span class="token punctuation">"</span></span><br><span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://es.example.com<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span><br><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">xhtml:</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alternate<span class="token punctuation">"</span></span> <span class="token attr-name">hreflang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>de<span class="token punctuation">"</span></span><br><span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://es.example.com<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span><br><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Guidelines for <code>hreflang</code> values <a class="w-headline-link" href="#guidelines-for-hreflang-values" aria-hidden="true">#</a></h2>`,
  `<ul>
<li>The <code>hreflang</code> value must always specify a language code.</li>
<li>The language code must follow
<a href="https://wikipedia.org/wiki/List_of_ISO_639-1_codes">ISO 639-1 format</a>.</li>
<li>The <code>hreflang</code> value can also include an optional regional code.
For example, <code>es-mx</code> is for Spanish speakers in Mexico, while <code>es-cl</code> is for
Spanish speakers in Chile.</li>
<li>The region code must follow the
<a href="https://wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2 format</a>.</li>
</ul>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/seo/hreflang.js">Source code for <strong>Document does not have a valid <code>hreflang</code></strong> audit</a></li>
<li><a href="https://support.google.com/webmasters/answer/189077">Tell Google about localized versions of your page</a></li>
<li><a href="https://wikipedia.org/wiki/List_of_ISO_639-1_codes">ISO 639-1 format</a></li>
<li><a href="https://wikipedia.org/wiki/ISO_3166-1_alpha-2">ISO 3166-1 alpha-2 format</a></li>
<li><a href="https://web.dev/hreflang/" rel="noopener">Document doesn't have a valid hreflang</a></li></ul>`,
];
