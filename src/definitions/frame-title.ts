export default [
  `<p>Users of screen readers and other assistive technologies rely on
frame titles to describe the contents of frames.
Navigating through frames and inline frames can quickly become difficult and confusing
for assistive technology users if the frames are not marked
with a title attribute.</p>`,
  `<h2>How the Lighthouse frame title audit fails <a class="w-headline-link" href="#how-the-lighthouse-frame-title-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags <code>&lt;frame&gt;</code> and <code>&lt;iframe&gt;</code> elements that don't have titles:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/frame-title/frame-title.png" alt="Lighthouse audit showing frame or iframe doesn't have a title element">
</figure>`,
  `<h2>How to add titles to frames and iframes <a class="w-headline-link" href="#how-to-add-titles-to-frames-and-iframes" aria-hidden="true">#</a></h2>`,
  `<p>Provide unique and descriptive <code>title</code> attributes for all <code>frame</code> and <code>iframe</code> elements.</p>`,
  `<p>Additionally, best practice is to give the enclosed document a title element
with content identical to the title attribute.
For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>My Daily Marathon Tracker<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.mydailymarathontracker.com/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Tips for creating descriptive frame titles <a class="w-headline-link" href="#tips-for-creating-descriptive-frame-titles" aria-hidden="true">#</a></h2>`,
  `<ul>
<li>As previously mentioned, give the enclosed document a title element with content identical to title attribute.</li>
<li>Replace placeholder titles such as "untitled frame" with a more appropriate phrase.</li>
<li>Make each title unique. Don't duplicate titles, even if they are similar.</li>
</ul>`,
  `<p>Learn more in
<a href="/write-descriptive-text">Write descriptive titles, descriptions, and link text for every page</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/frame-title.js">Source code for <strong><code>&lt;frame&gt;</code> or <code>&lt;iframe&gt;</code> elements do not have a title</strong> audit</a></li>
<li><a href="/labels-and-text-alternatives#label-documents-and-frames">Label documents and frames</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/frame-title">Frames must have title attribute (Deque University)</a></li>
<li><a href="https://web.dev/frame-title/" rel="noopener"><frame> or <iframe> elements do not have a title</a></li></ul>`,
];
