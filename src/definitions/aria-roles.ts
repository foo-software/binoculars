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
  `<p>The ARIA specification includes a
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">defined set of roles</a>.
When the value for an element's <code>role</code> attribute doesn't match a role from the set,
assistive technologies can't announce the element correctly
or interact with it as the developer intended.</p>`,
  `<h2>How Lighthouse determines an ARIA role has an invalid value <a class="w-headline-link" href="#how-lighthouse-determines-an-aria-role-has-an-invalid-value" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse" rel="noopener">Lighthouse</a>
flags ARIA roles with invalid values:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/aria-roles/aria-roles.png" alt="Lighthouse audit showing ARIA role has invalid values">
</figure>`,
  `<p>Lighthouse uses the
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">role definitions from the WAI-ARIA specification</a>
to check that all <code>role</code> attributes have valid values.
A page fails this audit when it contains an element with an invalid <code>role</code> value.
In the example Lighthouse audit above,
<code>button</code> has been misspelled as
<code>buton</code>, which isn't a valid role value.</p>`,
  `<h2>How to fix invalid ARIA role values <a class="w-headline-link" href="#how-to-fix-invalid-aria-role-values" aria-hidden="true">#</a></h2>`,
  `<p>Refer to the
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">WAI-ARIA role definitions</a>
to see the full list of valid roles.
Make sure all <code>role</code> attributes are set to a value in the definitions list.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/aria-roles.js" rel="noopener">Source code for <strong><code>[role]</code> values are not valid</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/aria-roles" rel="noopener">ARIA roles used must conform to valid values (Deque University)</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">Role definitions from the WAI-ARIA specification</a></li>
<li><a href="https://web.dev/aria-roles/" rel="noopener">[role] values are not valid</a></li></ul>`,
];
