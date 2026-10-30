// Fails when src/styles/tokens.css or tokens.uni.css don't match tokens/figma-variables.json.
// Catches hand edits, and a refreshed snapshot that wasn't followed by `npm run tokens`.
// Run: npm run tokens:check   (CI runs it on every push)
import { readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'

const files = ['src/styles/tokens.css', 'src/styles/tokens.uni.css']
const read = (f) => readFileSync(new URL(`../${f}`, import.meta.url), 'utf8')
const before = files.map(read)
execFileSync('node', ['scripts/tokens-from-figma.mjs'], { stdio: 'ignore' })
execFileSync('node', ['scripts/tokens-to-uniapp.mjs'], { stdio: 'ignore' })
const stale = files.filter((f, i) => read(f) !== before[i])
if (stale.length) {
  console.error(`Out of date: ${stale.join(', ')}. They were rebuilt from tokens/figma-variables.json; commit the result.`)
  process.exit(1)
}
console.log('Tokens OK: tokens.css and tokens.uni.css match tokens/figma-variables.json')
