export default [
  `<p>Screen readers have commands to quickly jump between headings or to specific
landmark regions. In fact,
<a href="http://www.heydonworks.com/article/responses-to-the-screen-reader-strategy-survey" rel="noopener">a survey of screen reader users</a>
found that they most often navigate an unfamiliar page by exploring the
headings.</p>`,
  `<p>By using correct heading and landmark elements, you can dramatically
improve the navigation experience on your site for users of assistive technologies.</p>`,
  `<h2>How the Lighthouse heading levels audit fails <a class="w-headline-link" href="#how-the-lighthouse-heading-levels-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>
flags pages whose headings skip one or more levels:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/heading-order/heading-order.png" alt="Lighthouse audit showing headings that skip levels">
</figure>`,
  `<p>For example, using an <code>&lt;h1&gt;</code> element for your page title
and then using <code>&lt;h3&gt;</code> elements for the page's main sections
will cause the audit to fail
because the <code>&lt;h2&gt;</code> level is skipped:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Section heading 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><br>  …<br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Section heading 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><br>  …</code></pre>
</web-copy-code>`,
  `<h2>How to fix poorly structured headings <a class="w-headline-link" href="#how-to-fix-poorly-structured-headings" aria-hidden="true">#</a></h2>`,
  `<ul>
<li>Make all heading elements follow a logical, numerical order
that reflects the structure of your content.</li>
<li>Make sure your heading text clearly conveys the content
in the associated section.</li>
</ul>`,
  `<p>For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Page title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Section Heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><br>  …<br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Sub-section Heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>One way to check your heading structure is to ask,
"If someone created an outline of my page using only the headings,
would it make sense?"</p>`,
  `<p>You can also use tools like Microsoft's
<a href="https://accessibilityinsights.io/" rel="noopener">Accessibility Insights extension</a>
to visualize your page structure and catch out-of-order heading elements.</p>`,
  `<p>See the <a href="/headings-and-landmarks">Headings and landmarks</a>
post for more information.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/heading-order.js" rel="noopener">Source code for <strong>Headings skip levels</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/heading-order" rel="noopener">Heading levels should only increase by one (Deque University)</a></li>
<li><a href="https://web.dev/heading-order/" rel="noopener">Heading elements are not in a sequentially-descending order</a></li></ul>`,
];
