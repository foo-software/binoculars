export default ({
  content,
  description,
  title,
}: {
  content?: string;
  description?: string;
  title?: string;
}): string => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    ${description && `<meta name="description" content="${description}" />`}
    ${title && `<title>${title}</title>`}
    <style>
      body {
        margin: 0;
        padding: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
      figure {
        margin: 0;
        padding: 0;
      }
      img.cat {
        max-width: 50%;
        height: auto;
      }
    </style>
  </head>
  <body>
    ${content}
  </body>
  </html>
`;
