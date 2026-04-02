import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
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

process.exit(result.status ?? 1)
