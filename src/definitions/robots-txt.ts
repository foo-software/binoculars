export default [
  `<p>The <code>robots.txt</code> file tells search engines which of your site's pages they can
crawl. An invalid <code>robots.txt</code> configuration can cause two types of problems:</p>`,
  `<ul>
<li>It can keep search engines from crawling public pages, causing your
content to show up less often in search results.</li>
<li>It can cause search engines to crawl pages you may not want shown in search
results.</li>
</ul>`,
  `<h2>How the Lighthouse <code>robots.txt</code> audit fails <a class="w-headline-link" href="#how-the-lighthouse-robots.txt-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags invalid
<code>robots.txt</code> files:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/robots-txt/robots-txt.png" alt="Lighthouse audit showing invalid robots.txt">
</figure>`,
  `<p>Expand the <strong><code>robots.txt</code> is not valid</strong> audit in your report
to learn what's wrong with your <code>robots.txt</code>.</p>`,
  `<p>Common errors include:</p>`,
  `<ul>
<li><code>No user-agent specified</code></li>
<li><code>Pattern should either be empty, start with "/" or "*"</code></li>
<li><code>Unknown directive</code></li>
<li><code>Invalid sitemap URL</code></li>
<li><code>$ should only be used at the end of the pattern</code></li>
</ul>`,
  `<p>Lighthouse doesn't check that your <code>robots.txt</code> file is
in the correct location. To function correctly, the file must be in the root of
your domain or subdomain.</p>`,
  `<h2>How to fix problems with <code>robots.txt</code> <a class="w-headline-link" href="#how-to-fix-problems-with-robots.txt" aria-hidden="true">#</a></h2>`,
  `<h3>Make sure <code>robots.txt</code> doesn't return an HTTP 5XX status code <a class="w-headline-link" href="#make-sure-robots.txt-doesn't-return-an-http-5xx-status-code" aria-hidden="true">#</a></h3>`,
  `<p>If your server returns a server error (an <a href="/http-status-code">HTTP status code</a>
in the 500s) for <code>robots.txt</code>, search engines won't know which pages should be
crawled. They may stop crawling your entire site, which would prevent new
content from being indexed.</p>`,
  `<p>To check the HTTP status code, open <code>robots.txt</code> in Chrome and
<a href="https://developers.google.com/web/tools/chrome-devtools/network/reference#analyze">check the request in Chrome DevTools</a>.</p>`,
  `<h3>Keep <code>robots.txt</code> smaller than 500 KiB <a class="w-headline-link" href="#keep-robots.txt-smaller-than-500-kib" aria-hidden="true">#</a></h3>`,
  `<p>Search engines may stop processing <code>robots.txt</code> midway through if the file is
larger than 500 KiB. This can confuse the search engine, leading to incorrect
crawling of your site.</p>`,
  `<p>To keep <code>robots.txt</code> small, focus less on individually excluded pages and more
on broader patterns. For example, if you need to block crawling of PDF files,
don't disallow each individual file. Instead, disallow all URLs containing
<code>.pdf</code> by using <code>disallow: /*.pdf</code>.</p>`,
  `<h3>Fix any format errors <a class="w-headline-link" href="#fix-any-format-errors" aria-hidden="true">#</a></h3>`,
  `<ul>
<li>Only empty lines, comments, and directives matching the "name: value" format are
allowed in <code>robots.txt</code>.</li>
<li>Make sure <code>allow</code> and <code>disallow</code> values are either empty or start with <code>/</code> or <code>*</code>.</li>
<li>Don't use <code>$</code> in the middle of a value (for example, <code>allow: /file$html</code>).</li>
</ul>`,
  `<h4>Make sure there's a value for <code>user-agent</code> <a class="w-headline-link" href="#make-sure-there's-a-value-for-user-agent" aria-hidden="true">#</a></h4>`,
  `<p>User-agent names to tell search engine crawlers which directives to follow. You
must provide a value for each instance of <code>user-agent</code> so search engines know
whether to follow the associated set of directives.</p>`,
  `<p>To specify a particular search engine crawler, use a user-agent name from its
published list. (For example, here's
<a href="https://support.google.com/webmasters/answer/1061943">Google's list of user-agents used for crawling</a>.)</p>`,
  `<p>Use <code>*</code> to match all otherwise unmatched crawlers.</p>`,
  `<figure>
  <p class="w-compare__label w-compare__label--worse">
    Don't
  </p>
<web-copy-code><pre class="language-text"><code class="language-text">user-agent:<br>disallow: /downloads/</code></pre>
</web-copy-code><p>No user agent is defined.</p>
</figure>`,
  `<figure>
  <p class="w-compare__label w-compare__label--better">
    Do
  </p>
<web-copy-code><pre class="language-text"><code class="language-text">user-agent: *<br>disallow: /downloads/<br><br>user-agent: magicsearchbot<br>disallow: /uploads/</code></pre>
</web-copy-code><p>A general user agent and a <code>magicsearchbot</code> user agent are defined.</p>
</figure>`,
  `<h4>Make sure there are no <code>allow</code> or <code>disallow</code> directives before <code>user-agent</code> <a class="w-headline-link" href="#make-sure-there-are-no-allow-or-disallow-directives-before-user-agent" aria-hidden="true">#</a></h4>`,
  `<p>User-agent names define the sections of your <code>robots.txt</code> file. Search engine
crawlers use those sections to determine which directives to follow. Placing a
directive <em>before</em> the first user-agent name means that no crawlers will follow
it.</p>`,
  `<figure>
  <p class="w-compare__label w-compare__label--worse">
    Don't
  </p>
<web-copy-code><pre class="language-text"><code class="language-text"># start of file<br>disallow: /downloads/<br><br>user-agent: magicsearchbot<br>allow: /</code></pre>
</web-copy-code><p>No search engine crawler will read the <code>disallow: /downloads</code> directive.</p>
</figure>`,
  `<figure>
  <p class="w-compare__label w-compare__label--better">
    Do
  </p>
<web-copy-code><pre class="language-text"><code class="language-text"># start of file<br>user-agent: *<br>disallow: /downloads/</code></pre>
</web-copy-code><p>All search engines are disallowed from crawling the <code>/downloads</code> folder.</p>
</figure>`,
  `<p>Search engine crawlers only follow directives in the section with the most
specific user-agent name. For example, if you have directives for
<code>user-agent: *</code> and  <code>user-agent: Googlebot-Image</code>, Googlebot Images will only
follow the directives in the <code>user-agent: Googlebot-Image</code> section.</p>`,
  `<h4>Provide an absolute URL for <code>sitemap</code> <a class="w-headline-link" href="#provide-an-absolute-url-for-sitemap" aria-hidden="true">#</a></h4>`,
  `<p><a href="https://support.google.com/webmasters/answer/156184">Sitemap</a> files are a
great way to let search engines know about pages on your website. A sitemap file generally includes a list of
the URLs on your website, together with information about when they were last
changed.</p>`,
  `<p>If you choose to submit a sitemap file in <code>robots.txt</code>, make sure to
use an <a href="https://tools.ietf.org/html/rfc3986#page-27">absolute URL</a>.</p>`,
  `<figure>
  <p class="w-compare__label w-compare__label--worse">
    Don't
  </p>
<web-copy-code><pre class="language-text"><code class="language-text">sitemap: /sitemap-file.xml</code></pre>
</web-copy-code></figure>`,
  `<figure>
  <p class="w-compare__label w-compare__label--better">
    Do
  </p>
<web-copy-code><pre class="language-text"><code class="language-text">sitemap: https://example.com/sitemap-file.xml</code></pre>
</web-copy-code></figure>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/seo/robots-txt.js">Source code for <strong><code>robots.txt</code> is not valid</strong> audit</a></li>
<li><a href="https://support.google.com/webmasters/answer/6062596">Create a <code>robots.txt file</code></a></li>
<li><a href="https://moz.com/learn/seo/robotstxt">Robots.txt</a></li>
<li><a href="https://developers.google.com/search/reference/robots_meta_tag">Robots meta tag and X-Robots-Tag HTTP header specifications</a></li>
<li><a href="https://support.google.com/webmasters/answer/156184">Learn about sitemaps</a></li>
<li><a href="https://support.google.com/webmasters/answer/1061943">Google crawlers (user agents)</a></li>
<li><a href="https://web.dev/robots-txt/" rel="noopener">robots.txt is not valid</a></li></ul>`,
];
