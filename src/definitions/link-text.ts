export default [
  `<p>Link text is the clickable word or phrase in a hyperlink. When link text clearly
conveys a hyperlink's target, both users and search engines can more easily
understand your content and how it relates to other pages.</p>`,
  `<h2>How the Lighthouse link text audit fails <a class="w-headline-link" href="#how-the-lighthouse-link-text-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags links
without descriptive text:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/link-text/link-text.png" alt="Lighthouse audit showing links don't have descriptive text">
</figure>`,
  `<p>Lighthouse flags the following generic link text:</p>`,
  `<ul>
<li><code>click here</code></li>
<li><code>click this</code></li>
<li><code>go</code></li>
<li><code>here</code></li>
<li><code>this</code></li>
<li><code>start</code></li>
<li><code>right here</code></li>
<li><code>more</code></li>
<li><code>learn more</code></li>
</ul>`,
  `<h2>How to add descriptive link text <a class="w-headline-link" href="#how-to-add-descriptive-link-text" aria-hidden="true">#</a></h2>`,
  `<p>Replace generic phrases like "click here" and "learn more" with specific
descriptions. In general, write link text that clearly indicates what type of
content users will get if they follow the hyperlink.</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>To see all of our basketball videos, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>videos.html<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>click here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<figure>
  <p class="w-compare__label w-compare__label--worse">
    Don't
  </p>
<p>"Click here" doesn't convey where the hyperlink will take users.</p>
</figure>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Check out all of our <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>videos.html<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>basketball videos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<figure>
  <p class="w-compare__label w-compare__label--better">
    Do
  </p>
<p>"Basketball videos" clearly conveys that the hyperlink will take users to a page
of videos.</p>
</figure>`,
  `<h2>Link text best practices <a class="w-headline-link" href="#link-text-best-practices" aria-hidden="true">#</a></h2>`,
  `<ul>
<li>Stay on topic. Don't use link text that has no relation to the page's content.</li>
<li>Don't use the page's URL as the link description unless you have a good reason
to do so, such as referencing a site's new address.</li>
<li>Keep descriptions concise. Aim for a few words or a short phrase.</li>
<li>Pay attention to your internal links too. Improving the quality of internal
links can help both users and search engines navigate your site more easily.</li>
</ul>`,
  `<p>See the <a href="https://support.google.com/webmasters/answer/7451184#uselinkswisely">Use links wisely</a>
section of Google's <a href="https://support.google.com/webmasters/answer/7451184">Search Engine Optimization (SEO) Starter Guide</a>
for more tips.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/seo/link-text.js">Source code for <strong>Links do not have descriptive text</strong> audit</a></li>
<li><a href="https://support.google.com/webmasters/answer/7451184">Search Engine Optimization (SEO) Starter Guide</a></li>
<li><a href="https://web.dev/link-text/" rel="noopener">Links do not have descriptive text</a></li></ul>`,
];
