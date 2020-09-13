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
  `<p>Each ARIA <code>role</code> supports a specific subset of <code>aria-*</code> attributes.
Applying an attribute to a role that doesn't support it generally won't
break the role, but it should still be fixed.</p>`,
  `<h2>How Lighthouse identifies ARIA mismatches <a class="w-headline-link" href="#how-lighthouse-identifies-aria-mismatches" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse" rel="noopener">Lighthouse</a>
flags mismatches between ARIA roles and <code>aria-*</code> attributes:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/aria-allowed-attr/aria-allowed-attr.png" alt="Lighthouse audit showing an ARIA list role with an unsupported checked attribute">
</figure>`,
  `<p>Lighthouse uses the
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">role definitions from the WAI-ARIA specification</a>
to check for mismatches between ARIA roles and attributes.
Each role has a set of states and properties (that is, <em>attributes</em>)
that it can support or inherit.
A page fails this audit
when it contains an element with an ARIA role and an ARIA attribute
that isn't supported for that role.</p>`,
  `<p>In the example shown in the screenshot,
the <code>aria-checked</code> attribute is not allowed on an element with the <code>list</code> role.
This makes sense: list elements can't be checked or unchecked.</p>`,
  `<p>An unsupported attribute generally won't break an element's role.
In the example above, the element is still announced as a list, and
the browser ignores the <code>aria-checked</code> attribute.
However, this issue is still important to fix
and probably indicates a mistaken assumption in your code.</p>`,
  `<h2>How to avoid ARIA mismatches <a class="w-headline-link" href="#how-to-avoid-aria-mismatches" aria-hidden="true">#</a></h2>`,
  `<p>Refer to the
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">WAI-ARIA role definitions</a>.
ARIA explicitly defines which attributes are allowed for each role.
As long as an attribute is listed for the role you're using,
you can apply it.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/aria-allowed-attr.js" rel="noopener">Source code for <strong><code>[aria-*]</code> attributes do not match their roles</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/aria-allowed-attr" rel="noopener">Elements must only use allowed ARIA attributes (Deque University)</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">Role definitions from the WAI-ARIA specification</a></li>
<li><a href="https://web.dev/aria-allowed-attr/" rel="noopener">[aria-*] attributes do not match their roles</a></li></ul>`,
];
