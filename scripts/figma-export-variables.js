// Exports the five "MoodLink DS / …" variable collections in the format of
// tokens/figma-variables.json. Run it inside Figma with the Plugin API available
// (for example a development plugin, or ask Claude with the Figma connector to run it),
// save the printed JSON as tokens/figma-variables.json, then run `npm run tokens`.
const V = figma.variables
const hex = (n) => Math.round(n * 255).toString(16).padStart(2, '0')
const out = {
  source: {
    fileKey: figma.fileKey ?? 'Eo3tD5Lo2odmoWGf0Mfndz',
    file: figma.root.name,
    exported: new Date().toISOString().slice(0, 10),
  },
  collections: [],
  vars: [],
}
for (const c of await V.getLocalVariableCollectionsAsync()) {
  if (!c.name.startsWith('MoodLink DS')) continue
  out.collections.push({
    id: c.id,
    name: c.name,
    modes: c.modes.map((m) => ({ id: m.modeId, name: m.name })),
    n: c.variableIds.length,
  })
  for (const id of c.variableIds) {
    const v = await V.getVariableByIdAsync(id)
    const vals = {}
    for (const m of c.modes) {
      const x = v.valuesByMode[m.modeId]
      if (x && typeof x === 'object' && x.type === 'VARIABLE_ALIAS') {
        vals[m.name] = { alias: (await V.getVariableByIdAsync(x.id))?.name }
      } else if (x && typeof x === 'object' && 'r' in x) {
        vals[m.name] = '#' + hex(x.r) + hex(x.g) + hex(x.b) + (x.a !== undefined && x.a < 1 ? hex(x.a) : '')
      } else {
        vals[m.name] = x
      }
    }
    out.vars.push({
      col: c.name,
      name: v.name,
      type: v.resolvedType,
      web: v.codeSyntax?.WEB,
      desc: v.description || undefined,
      vals,
    })
  }
}
console.log(JSON.stringify(out, null, 1))
