export default [
  `<p>Search engines often can't index content that relies on browser plugins, such as
Java or Flash. That means plugin-based content doesn't show up in search
results.</p>`,
  `<p>Also, most mobile devices don't support plugins, which
<a href="https://developers.google.com/search/mobile-sites/mobile-seo/common-mistakes#unplayable-content">creates frustrating experiences for mobile users</a>.</p>`,
  `<h2>How the Lighthouse plugins audit fails <a class="w-headline-link" href="#how-the-lighthouse-plugins-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags pages
that use plugins:</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/plugins/plugins.png" alt="Lighthouse audit showing document uses plugins">
</figure>`,
  `<p>Lighthouse checks the page for elements that commonly represent plugins:</p>`,
  `<ul>
<li><code>embed</code></li>
<li><code>object</code></li>
<li><code>applet</code></li>
</ul>`,
  `<p>Lighthouse then flags an element as a plugin if its MIME type matches any of the
following:</p>`,
  `<ul>
<li><code>application/x-java-applet</code></li>
<li><code>application/x-java-bean</code></li>
<li><code>application/x-shockwave-flash</code></li>
<li><code>application/x-silverlight</code></li>
<li><code>application/x-silverlight-2</code></li>
</ul>`,
  `<p>Lighthouse also flags elements that point to a URL with a file format that is
known to represent plugin content:</p>`,
  `<ul>
<li><code>swf</code></li>
<li><code>flv</code></li>
<li><code>class</code></li>
<li><code>xap</code></li>
</ul>`,
  `<h2>Don't use plugins to display your content <a class="w-headline-link" href="#don't-use-plugins-to-display-your-content" aria-hidden="true">#</a></h2>`,
  `<p>To convert plugin-based content to HTML, refer to guidance for that
plugin. For example, MDN explains <a href="https://developer.mozilla.org/en-US/docs/Plugins/Flash_to_HTML5/Video">how to convert Flash video to HTML5 video</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/seo/plugins.js">Source code for <strong>Document uses plugins</strong> audit</a></li>
<li><a href="https://developers.google.com/search/mobile-sites/mobile-seo/common-mistakes#unplayable-content">Unplayable content on mobile devices</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Plugins/Flash_to_HTML5/Video">Flash video to HTML5 video</a></li>
<li><a href="https://web.dev/plugins/" rel="noopener">Document uses plugins</a></li></ul>`,
];
