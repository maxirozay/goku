import { defineConfig } from 'vite'

export default defineConfig({
  base: '',
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
