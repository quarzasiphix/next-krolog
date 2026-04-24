<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="pl">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sitemap XML | Nekrolog Łódź</title>
        <style>
          body {
            margin: 0;
            font-family: Georgia, serif;
            background: #0b0b0b;
            color: #f3efe7;
          }
          .wrap {
            max-width: 1100px;
            margin: 0 auto;
            padding: 32px 20px 60px;
          }
          h1 {
            margin: 0 0 12px;
            font-size: 32px;
            color: #d3a63b;
          }
          p {
            color: #c8c1b6;
            line-height: 1.6;
          }
          .meta {
            margin: 24px 0;
            padding: 16px 18px;
            border: 1px solid rgba(211, 166, 59, 0.35);
            background: rgba(211, 166, 59, 0.08);
            border-radius: 14px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 24px;
            background: #111111;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            overflow: hidden;
          }
          th, td {
            text-align: left;
            padding: 14px 16px;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            vertical-align: top;
            font-size: 14px;
          }
          th {
            color: #d3a63b;
            background: #141414;
            font-weight: 700;
          }
          td {
            color: #e8e2d8;
          }
          tr:last-child td {
            border-bottom: none;
          }
          a {
            color: #f3efe7;
            text-decoration: none;
            word-break: break-word;
          }
          a:hover {
            color: #d3a63b;
            text-decoration: underline;
          }
          .count {
            color: #d3a63b;
            font-weight: 700;
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>Sitemap XML</h1>
          <p>Mapa strony dla serwisu Nekrolog Łódź.</p>

          <div class="meta">
            <p>
              Liczba adresów URL:
              <span class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)" /></span>
            </p>
          </div>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Ostatnia modyfikacja</th>
                <th>Częstotliwość</th>
                <th>Priorytet</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a>
                      <xsl:attribute name="href"><xsl:value-of select="sitemap:loc"/></xsl:attribute>
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td><xsl:value-of select="sitemap:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
