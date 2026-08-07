import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'

const escapeHtml = html => html
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')

// Replaces `<!-- inject:path/to/file -->` with the file's escaped content, so
// the docs always show the real source instead of a copy that drifts.
const injectSource = () => ({
  name: 'inject-source',
  transformIndexHtml: {
    order: 'pre',
    handler (html) {
      return html.replace(
        /<!--\s*inject:(\S+?)\s*-->/g,
        (_, path) => escapeHtml(readFileSync(path, 'utf8').trimEnd())
      )
    }
  }
})

export default defineConfig({
  base: '',
  plugins: [injectSource()],
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        entryFileNames: `css/[name].css`,
        assetFileNames: `[name].[ext]`
      }
    }
  }
})
