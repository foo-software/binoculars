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
  `<p>Using the <code>aria-hidden="true"</code> attribute on an element hides the element
and all its children from screen readers and other assistive technologies.
If the hidden element contains a <strong>focusable</strong> element,
assistive technologies won't read the focusable element,
but keyboard users will still be able to navigate to it,
which can cause confusion.</p>`,
  `<h2>How Lighthouse identifies partially hidden focusable elements <a class="w-headline-link" href="#how-lighthouse-identifies-partially-hidden-focusable-elements" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse" rel="noopener">Lighthouse</a>
flags focusable elements that have parents with the <code>aria-hidden="true"</code> attribute:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/aria-hidden-focus/aria-hidden-focus.png" alt="Lighthouse audit showing focusable elements that have parents with the aria-hidden attribute">
</figure>`,
  `<p>An element is <em>focusable</em> when keyboard users can navigate to it
using the <code>Tab</code> key.
Focusability differs somewhat across browsers, but in general,
the following elements are focusable:</p>`,
  `<ul>
<li><code>&lt;a&gt;</code></li>
<li><code>&lt;area&gt;</code></li>
<li><code>&lt;audio controls&gt;</code></li>
<li><code>&lt;button&gt;</code></li>
<li><code>&lt;iframe&gt;</code></li>
<li><code>&lt;input&gt;</code></li>
<li><code>&lt;select&gt;</code></li>
<li><code>&lt;summary&gt;</code></li>
<li><code>&lt;textarea&gt;</code></li>
<li><code>&lt;video controls&gt;</code></li>
<li>Any element with the <code>contentEditable</code> attribute</li>
<li>Any element with a <code>tabindex</code> set to a numeric value other than <code>-1</code></li>
</ul>`,
  `<p>For a complete breakdown of cross-browser focus behavior, see ally.js's
<a href="https://allyjs.io/data-tables/focusable.html" rel="noopener">Focusable Elements - Browser Compatibility Table</a>.</p>`,
  `<h2>How to fix partially hidden focusable elements <a class="w-headline-link" href="#how-to-fix-partially-hidden-focusable-elements" aria-hidden="true">#</a></h2>`,
  `<p>If you're hiding a container element on your page using <code>aria-hidden</code>,
you also need to prevent users from navigating to any focusable elements
inside that container.</p>`,
  `<p>One way to do that is to use JavaScript to apply a <code>tabindex="-1"</code> attribute
to all focusable elements in the container.
However, as implied by the list above,
a query that captures all focusable elements can get complicated quickly.</p>`,
  `<p>If you're hiding the container element from sighted users,
consider using one of the following strategies instead:</p>`,
  `<ul>
<li>Add a <code>hidden</code> attribute to the container element.</li>
<li>Apply the <code>display: none</code> or the <code>visibility: hidden</code> CSS property
to the container element.</li>
</ul>`,
  `<p>If you can't visually hide the container element—for example,
if it's behind a modal dialog with a translucent background—consider
using <a href="https://github.com/WICG/inert" rel="noopener">the WICG's <code>inert</code> polyfill</a>.
The polyfill emulates the behavior of a proposed <code>inert</code> attribute,
which prevents elements from being read or selected.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/aria-hidden-focus.js" rel="noopener">Source code for <strong><code>[aria-hidden="true"]</code> elements contain focusable descendants</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/aria-hidden-focus" rel="noopener">aria-hidden elements do not contain focusable elements (Deque University)</a></li>
<li><a href="https://github.com/WICG/inert" rel="noopener">WICG <code>inert</code> polyfill</a></li>
<li><a href="https://web.dev/aria-hidden-focus/" rel="noopener">[aria-hidden="true"] elements contain focusable descendants</a></li></ul>`,
];
