import { spawnSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
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
  const stylesheetLine = `<?xml-stylesheet type="text/xsl" href="${siteUrl}/sitemap.xsl"?>`

  const injectStylesheet = (filePath) => {
    if (!existsSync(filePath)) {
      return
    }

    const source = readFileSync(filePath, 'utf8')

    if (source.includes('<?xml-stylesheet')) {
      return
    }

    const updated = source.replace(
      '<?xml version="1.0" encoding="UTF-8"?>',
      `<?xml version="1.0" encoding="UTF-8"?>\n${stylesheetLine}`
    )

    writeFileSync(filePath, updated, 'utf8')
  }

  injectStylesheet(sitemapIndexPath)

  if (existsSync(sitemapDir)) {
    const sitemapFiles = readdirSync(sitemapDir)
      .filter((file) => file.endsWith('.xml'))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    sitemapFiles.forEach((file) => {
      injectStylesheet(join(sitemapDir, file))
    })
  }
}

process.exit(result.status ?? 1)
