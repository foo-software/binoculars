export default [
  `<p>HTML5 elements such as <code>main</code>, <code>nav</code>, and <code>aside</code> act as landmarks,
or special regions on the page to which
screen readers and other assistive technologies can jump.
By using landmark elements,
you can dramatically improve the navigation experience on your site
for users of assistive technology.
Learn more in Deque University's
<a href="https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html">HTML 5 and ARIA Landmarks</a>.</p>`,
  `<h2>How to manually check landmarks <a class="w-headline-link" href="#how-to-manually-check-landmarks" aria-hidden="true">#</a></h2>`,
  `<p>Use <a href="https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/landmarks/HTML5.html">the W3C's list of landmark elements</a>
to check that each major section of your page is contained by a landmark element.
For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Put product name and logo here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Put navigation here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Put main content here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Put copyright info, supplemental links, etc. here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>You can also use tools like Microsoft's
<a href="https://accessibilityinsights.io/" rel="noopener">Accessibility Insights extension</a>
to visualize your page structure and catch sections that aren't contained in landmarks:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot--filled" src="https://webdev.imgix.net/use-landmarks/landmark-highlights.png" alt="Screenshot of web.dev with landmarks highlighted by the Accessibility Insights extension">
</figure>`,
  `<h2>How to use landmarks effectively <a class="w-headline-link" href="#how-to-use-landmarks-effectively" aria-hidden="true">#</a></h2>`,
  `<ul>
<li>Use landmark elements to define major sections of your page
instead of relying on generic elements like <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>.</li>
<li>Use landmarks to convey the structure of your page.
For example, the <code>&lt;main&gt;</code> element should include all content directly related
to the page's main idea, so there should only be one per page.
See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning">MDN's summary of content sectioning elements</a>
to learn how to use each landmark.</li>
<li>Use landmarks judiciously. Having too many landmarks can actually
make navigation <em>more</em> difficult for assistive technology users because
it prevents them from easily skipping to a desired piece of content.</li>
</ul>`,
  `<p>See the <a href="/headings-and-landmarks">Headings and landmarks</a> post
for more information.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/ecd10efc8230f6f772e672cd4b05e8fbc8a3112d/lighthouse-core/audits/accessibility/manual/use-landmarks.js">Source code for <strong>HTML5 landmark elements are used to improve navigation</strong> audit</a></li>
<li><a href="https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/landmarks/HTML5.html">HTML5 Sectioning Elements (W3C)</a></li>
<li><a href="https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html">HTML 5 and ARIA Landmarks (Deque University)</a></li>
<li><a href="https://web.dev/use-landmarks/" rel="noopener">HTML5 landmark elements are used to improve navigation</a></li></ul>`,
];
