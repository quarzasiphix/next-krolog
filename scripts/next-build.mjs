import { spawnSync } from 'node:child_process'
import { existsSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const primaryNodeModules = join(root, 'node_modules')
const fallbackNodeModules = join(root, '.deps-fresh', 'node_modules')
const activeNodeModules = existsSync(join(primaryNodeModules, 'next', 'package.json'))
  ? primaryNodeModules
  : fallbackNodeModules

const nextBin = join(activeNodeModules, 'next', 'dist', 'bin', 'next')
const pathKey = process.platform === 'win32' ? 'Path' : 'PATH'

const result = spawnSync(process.execPath, [nextBin, 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_PATH: [activeNodeModules, process.env.NODE_PATH]
      .filter(Boolean)
      .join(process.platform === 'win32' ? ';' : ':'),
    [pathKey]: [join(activeNodeModules, '.bin'), process.env[pathKey], process.env.PATH]
      .filter(Boolean)
      .join(process.platform === 'win32' ? ';' : ':'),
  },
})

if ((result.status ?? 1) === 0) {
  const outDir = join(root, 'out')
  const sitemapDir = join(outDir, 'sitemap')
  const sitemapIndexPath = join(outDir, 'sitemap.xml')
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nekrolog-lodz.com'

  if (existsSync(sitemapDir)) {
    const sitemapFiles = readdirSync(sitemapDir)
      .filter((file) => file.endsWith('.xml'))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    if (sitemapFiles.length > 0) {
      const sitemapIndex = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...sitemapFiles.map((file) => `  <sitemap><loc>${siteUrl}/sitemap/${file}</loc></sitemap>`),
        '</sitemapindex>',
        '',
      ].join('\n')

      writeFileSync(sitemapIndexPath, sitemapIndex, 'utf8')
    }
  }
}

process.exit(result.status ?? 1)
