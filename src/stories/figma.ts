// Links from each story to its Figma component.
export const FIGMA_FILE =
  'https://www.figma.com/design/Eo3tD5Lo2odmoWGf0Mfndz/GOO001P---MoodLink-MobileApp---Client-V2.0'

export const figmaUrl = (nodeId: string) => `${FIGMA_FILE}?node-id=${nodeId.replace(':', '-')}`

export const figmaDocs = (name: string, nodeId: string, note = '') => ({
  docs: {
    description: {
      component: `Figma component \`${name}\` — [open in Figma](${figmaUrl(nodeId)}).${note ? ` ${note}` : ''}`,
    },
  },
})
