export default [
  `<p>Whenever new content is added to a page,
try to ensure the user's focus gets directed to that content,
so they can take action on it.</p>`,
  `<h2>How to manually test <a class="w-headline-link" href="#how-to-manually-test" aria-hidden="true">#</a></h2>`,
  `<p>Single-page apps are important to test,
especially when it comes to managing a user's focus
to new content.</p>`,
  `<p>Typically in a single-page app,
clicking on a link won't do a hard refresh.
Instead,
a route change fetches new data for the <code>&lt;main&gt;</code> content area.</p>`,
  `<p>For sighted users,
this works fine.
But users navigating with a screen reader or other assistive technology
may not know that the new content
has been added to the page.
There's no indication that they should navigate
back to the <code>&lt;main&gt;</code> area.</p>`,
  `<p>When this happens,
you'll want to manage the user's focus
to keep the user's perceived context in sync with the site's visual content.</p>`,
  `<h2>How to fix <a class="w-headline-link" href="#how-to-fix" aria-hidden="true">#</a></h2>`,
  `<p>To manage a user's focus to fresh content on a page,
find a good heading in the newly loaded content and direct focus to it.
The easiest way to pull this off is to give the heading a <code>tabindex</code> of <code>-1</code>
and call its <code>focus()</code> method:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Welcome to your shopping cart<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"><br>  <span class="token comment">// Assuming this gets called every time new content loads...</span><br>  <span class="token keyword">function</span> <span class="token function">onNewPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><br>    <span class="token keyword">var</span> heading <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'h2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><br>    heading<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><br>    <span class="token comment">// You can also update the page title :)</span><br>    document<span class="token punctuation">.</span>title <span class="token operator">=</span> heading<span class="token punctuation">.</span>textContent<span class="token punctuation">;</span><br>  <span class="token punctuation">}</span><br></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>Assistive technologies announce the new heading
and the main landmark area that it's contained in.</p>`,
  `<p>See also <a href="https://dev.to/robdodson/managing-focus-64l">Managing focus for accessibility</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://github.com/GoogleChrome/lighthouse/blob/ecd10efc8230f6f772e672cd4b05e8fbc8a3112d/lighthouse-core/audits/accessibility/manual/managed-focus.js">Source code for <strong>The user's focus is directed to new content added to the page</strong> audit</a><li><a href="https://web.dev/managed-focus/" rel="noopener">The user's focus is directed to new content added to the page</a></li></p>`,
];
