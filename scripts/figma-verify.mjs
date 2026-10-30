// Before publishing Code Connect: checks that every template's Figma node still exists
// and still has the expected component name (catches deleted or renamed components).
// Needs FIGMA_ACCESS_TOKEN (scope: File content: Read). Run: npm run figma:verify
import { readdirSync, readFileSync, existsSync } from 'node:fs'

const token = process.env.FIGMA_ACCESS_TOKEN
if (!token) throw new Error('Set FIGMA_ACCESS_TOKEN (scope: File content: Read).')
const dir = new URL('../figma/', import.meta.url)
const templates = []
const scan = (d) => {
  for (const f of readdirSync(d, { withFileTypes: true })) {
    if (f.isDirectory()) scan(new URL(`${f.name}/`, d))
    else if (f.name.endsWith('.figma.ts')) {
      const src = readFileSync(new URL(f.name, d), 'utf8')
      const m = src.match(/\/\/ url=\S*\/design\/([\w]+)\/\S*node-id=(\d+)-(\d+)/)
      const id = src.match(/\bid: '([^']+)'/)?.[1]
      if (m) templates.push({ file: f.name, fileKey: m[1], node: `${m[2]}:${m[3]}`, id })
    }
  }
}
scan(dir)
// Expected Figma names: the template `id` for the core components; the manifest for the icons.
const manifest = new URL('mental-health-icons.json', dir)
const iconNames = existsSync(manifest)
  ? Object.fromEntries(JSON.parse(readFileSync(manifest, 'utf8')).icons.map((i) => [i.id, i.figmaName]))
  : {}
const fileKey = templates[0].fileKey
const problems = []
for (let i = 0; i < templates.length; i += 100) {
  const batch = templates.slice(i, i + 100)
  const res = await fetch(
    `https://api.figma.com/v1/files/${fileKey}/nodes?depth=1&ids=${batch.map((t) => t.node).join(',')}`,
    { headers: { 'X-Figma-Token': token } },
  )
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  const { nodes } = await res.json()
  for (const t of batch) {
    const doc = nodes[t.node]?.document
    const expected = iconNames[t.node] ?? t.id
    if (!doc) problems.push(`${t.file}: node ${t.node} not found`)
    else if (!/^COMPONENT(_SET)?$/.test(doc.type)) problems.push(`${t.file}: node ${t.node} is a ${doc.type}, not a component`)
    else if (expected && doc.name !== expected) problems.push(`${t.file}: node ${t.node} is named "${doc.name}", expected "${expected}"`)
  }
}
if (problems.length) {
  console.error(`${problems.length} problem(s):\n- ${problems.join('\n- ')}`)
  process.exit(1)
}
console.log(`Figma OK: all ${templates.length} Code Connect nodes exist with the expected names.`)
