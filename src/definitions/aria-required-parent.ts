export default [
  `<p>Users of screen readers and other assistive technologies need information
about the behavior and purpose of controls on your web page.
Native HTML controls like buttons and radio groups
come with that information <a href="/use-semantic-html">built in</a>.
For custom controls you create, however, you must provide the information with
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions">ARIA</a>
roles and attributes.
(Learn more in the
<a href="https://developers.google.com/web/fundamentals/accessibility/semantics-aria/">Introduction to ARIA</a>.)</p>`,
  `<p>Some ARIA roles must be owned by specific parent roles.
For example, the <code>tab</code> role must have
an element with the <code>tablist</code> role as a parent.
If the required parent role isn't present,
assistive technologies may announce the child roles as plain text content
rather than the intended control.</p>`,
  `<h2>How Lighthouse identifies missing parent roles <a class="w-headline-link" href="#how-lighthouse-identifies-missing-parent-roles" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse" rel="noopener">Lighthouse</a>
flags ARIA child roles that aren't contained by the required parent:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/aria-required-parent/aria-required-parent.png" alt="Lighthouse audit showing ARIA role missing required parent role">
</figure>`,
  `<p>Lighthouse uses the
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">role definitions from the WAI-ARIA specification</a>
to check for
<a href="https://www.w3.org/TR/wai-aria/#scope" rel="noopener">required context roles</a>—that is,
required parent roles.
A page fails this audit
when it contains a child role that's missing its required parent role.</p>`,
  `<p>In the example Lighthouse audit above,
the <code>listitem</code> role requires a parent <code>group</code> or <code>list</code>.
Since there's no parent role defined,
the audit fails.
This makes sense,
as it would be confusing to have a list item that isn't part of a list.</p>`,
  `<p>This issue is important to fix and may break the experience for users.
In the example above, the element would be announced as plain text content,
and its <code>listitem</code> role would be ignored.</p>`,
  `<h2>How to add missing parent roles <a class="w-headline-link" href="#how-to-add-missing-parent-roles" aria-hidden="true">#</a></h2>`,
  `<p>Refer to the
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">WAI-ARIA role definitions</a>
to see which parent roles are required for the elements that Lighthouse flagged.
(The spec refers to required parents as
<a href="https://www.w3.org/TR/wai-aria/#scope" rel="noopener">required context roles</a>.)</p>`,
  `<p>There are two ways to set up the required relationships
between ARIA parent and child roles.</p>`,
  `<h3>Option 1: Place the child elements within the parent in the DOM <a class="w-headline-link" href="#option-1:-place-the-child-elements-within-the-parent-in-the-dom" aria-hidden="true">#</a></h3>`,
  `<p>Placing elements with child roles within the parent role element
in your HTML is usually the easiest and most maintainable solution.
For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tablist<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span> <span class="token attr-name">aria-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-1-pane<span class="token punctuation">"</span></span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span><br>		Tab 1<br>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><br>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span> <span class="token attr-name">aria-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-2-pane<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>		Tab 2<br>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><br>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span> <span class="token attr-name">aria-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-3-pane<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>		Tab 3<br>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h3>Option 2: Associate the child roles with the parent role using <code>aria-owns</code> <a class="w-headline-link" href="#option-2:-associate-the-child-roles-with-the-parent-role-using-aria-owns" aria-hidden="true">#</a></h3>`,
  `<p>If you can't place child role elements inside the parent role element,
you can use the <code>aria-owns</code> attribute to associate them:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><mark class="highlight-line highlight-line-active"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tablist<span class="token punctuation">"</span></span> <span class="token attr-name">aria-owns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-1 tab-2 tab-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></mark><br><span class="highlight-line">…</span><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-1<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span> <span class="token attr-name">aria-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-1-pane<span class="token punctuation">"</span></span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line">  Tab 1</span><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-2<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span> <span class="token attr-name">aria-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-2-pane<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line">  Tab 2</span><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-3<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span> <span class="token attr-name">aria-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token attr-name">aria-controls</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab-3-pane<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line">  Tab 3</span><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span></code></pre>
</web-copy-code>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/aria-required-parent.js" rel="noopener">Source code for <strong><code>[role]</code>s are not contained by their required parent element</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/aria-required-parent" rel="noopener">Certain ARIA roles must be contained by particular parent elements (Deque University)</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">Role definitions from the WAI-ARIA specification</a></li>
<li><a href="https://web.dev/aria-required-parent/" rel="noopener">[role]s are not contained by their required parent element</a></li></ul>`,
];
