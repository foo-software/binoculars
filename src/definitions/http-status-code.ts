export default [
  `<p>Servers provide a three-digit <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">HTTP status code</a>
for each resource request they receive. Status codes in the 400s and 500s
<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Client_error_responses">indicate that there's an error</a>
with the requested resource. If a search engine encounters a status code error
when it's <strong>crawling</strong> a web page, it may not index that page properly.</p>`,
  `<h2>How the Lighthouse HTTP status code audit fails <a class="w-headline-link" href="#how-the-lighthouse-http-status-code-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a> flags pages
that return an unsuccessful HTTP status code (in the 400s or 500s):</p>`,
  `<figure>
  <img class="w-screenshot w-screenshot" src="https://webdev.imgix.net/http-status-code/http-status-code.png" alt="Lighthouse audit showing search engines are struggling to index your page">
</figure>`,
  `<h2>How to fix an unsuccessful HTTP status code <a class="w-headline-link" href="#how-to-fix-an-unsuccessful-http-status-code" aria-hidden="true">#</a></h2>`,
  `<p>First make sure you actually want search engines to crawl the page. Some pages,
like your 404 page or any other page that shows an error, shouldn't be included
in search results.</p>`,
  `<p>To fix an HTTP status code error, refer to the documentation for your server or
hosting provider. The server should return a status code in the 200s for all
valid URLs or a status code in the 300s for a resource that has moved to
another URL.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/seo/http-status-code.js">Source code for <strong>Page has unsuccessful HTTP status code</strong> audit</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">HTTP response status codes</a></li>
<li><a href="https://web.dev/http-status-code/" rel="noopener">Page has unsuccessful HTTP status code</a></li></ul>`,
  `<div>
      <div class="w-callout__header">
        <h2 class="w-callout__lockup w-callout__lockup--codelab">Codelabs</h2>
        <div class="w-callout__headline">See it in action</div>
        <div class="w-callout__blurb">
          Learn more and put this guide into action.
        </div>
      </div>
      <ul class="w-unstyled-list w-callout__list">
        <li class="w-callout__listitem">
  <a class="w-callout__link w-callout__link--codelab" href="/codelab-fix-sneaky-404/">
    Fix sneaky 404s
  </a>
</li>
      </ul>
    </div>`,
];
