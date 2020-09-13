export default [
  `<p>Many search engines rank pages based on how mobile-friendly they are.
Without a <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag">viewport meta tag</a>,
mobile devices render pages at typical desktop screen widths and then scale the
pages down, making them difficult to read.</p>`,
  `<p>Setting the viewport meta tag lets you control the
width and scaling of the viewport so that it's sized correctly on all devices.</p>`,
  `<h2>How the Lighthouse viewport meta tag audit fails <a class="w-headline-link" href="#how-the-lighthouse-viewport-meta-tag-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags pages
without a viewport meta tag:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/viewport/viewport.png" alt="Lighthouse audit shows page is missing a viewport">
</figure>`,
  `<p>A page fails the audit unless all of these conditions are met:</p>`,
  `<ul>
<li>The document's <code>&lt;head&gt;</code> contains a <code>&lt;meta name="viewport"&gt;</code> tag.</li>
<li>The viewport meta tag contains a <code>content</code> attribute.</li>
<li>The <code>content</code> attribute's value includes the text <code>width=</code>.</li>
</ul>`,
  `<p>Lighthouse <em>doesn't</em> check that <code>width</code> equals <code>device-width</code>. It also doesn't
check for an <code>initial-scale</code> key-value pair. However, you still need to include
both for your page to render correctly on mobile devices.</p>`,
  `<h2>How to add a viewport meta tag <a class="w-headline-link" href="#how-to-add-a-viewport-meta-tag" aria-hidden="true">#</a></h2>`,
  `<p>Add a viewport <code>&lt;meta&gt;</code> tag with the appropriate key-value pairs to the <code>&lt;head&gt;</code>
of your page:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="highlight-line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line">    …</span><br><mark class="highlight-line highlight-line-active">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></mark><br><span class="highlight-line">    …</span><br><span class="highlight-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line">  …</span></code></pre>
</web-copy-code>`,
  `<p>Here's what each key-value pair does:</p>`,
  `<ul>
<li><code>width=device-width</code> sets the width of the viewport to the width of the device.</li>
<li><code>initial-scale=1</code> sets the initial zoom level when the user visits the page.</li>
</ul>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/viewport.js">Source code for <strong>Has a <code>&lt;meta name="viewport"&gt;</code> tag with <code>width</code> or <code>initial-scale</code></strong> audit</a></li>
<li><a href="https://developers.google.com/web/fundamentals/design-and-ux/responsive/#set-the-viewport">Responsive Web Design Basics</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag">Using the viewport meta tag to control layout on mobile browsers</a></li>
<li><a href="https://web.dev/viewport/" rel="noopener">Does not have a <meta name="viewport"> tag with width or initial-scale</a></li></ul>`,
];
