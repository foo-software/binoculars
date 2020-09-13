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
  `<p>Some ARIA roles have required <code>aria-*</code> attributes
that provide essential information about state and functionality.
For example, the <code>option</code> role requires the <code>aria-selected</code> attribute.
If ARIA roles don't have the required attributes,
assistive technology users won't be able to successfully interact with them.</p>`,
  `<h2>How Lighthouse identifies missing required states and properties <a class="w-headline-link" href="#how-lighthouse-identifies-missing-required-states-and-properties" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse" rel="noopener">Lighthouse</a>
flags ARIA roles that don't have the required states and properties:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/aria-required-attr/aria-required-attr.png" alt="Lighthouse audit showing ARIA role missing required states and properties">
</figure>`,
  `<p>Lighthouse uses the
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">role definitions from the WAI-ARIA specification</a>
to check for a role's required attributes.
A page fails this audit
when it contains a role that's missing its required states or properties.</p>`,
  `<p>A missing required attribute won't break the element's role.
In the example above,
the element is still announced as a heading and assigned a default level of <code>2</code>.
However, this issue is still important to fix and
probably indicates a mistaken assumption in your code.</p>`,
  `<h2>How to add missing states and properties to ARIA roles <a class="w-headline-link" href="#how-to-add-missing-states-and-properties-to-aria-roles" aria-hidden="true">#</a></h2>`,
  `<p>Refer to the
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">WAI-ARIA role definitions</a>
to see what states and properties are required for the roles on your page.</p>`,
  `<p>Since properties don't change, you can simply add them to the elements
that Lighthouse flagged.</p>`,
  `<p>States, however, do change as the user interacts with your page,
so you'll need to add JavaScript to change the state value
when the relevant event occurs.
For example, an <code>option</code> role's <code>aria-selected</code> state should toggle
between <code>true</code> and <code>false</code> when the user clicks the element or
presses <code>Enter</code> or <code>Space</code> when the element is focused.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/aria-required-attr.js" rel="noopener">Source code for <strong><code>[role]</code>s do not have all required <code>[aria-*]</code> attributes</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/aria-required-attr" rel="noopener">Required ARIA attributes must be provided (Deque University)</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">Role definitions from the WAI-ARIA specification</a></li>
<li><a href="https://web.dev/aria-required-attr/" rel="noopener">[role]s do not have all required [aria-*] attributes</a></li></ul>`,
];
