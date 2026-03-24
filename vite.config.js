import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        company: resolve(rootDir, 'company/index.html'),
        products: resolve(rootDir, 'products/index.html'),
        exportServices: resolve(rootDir, 'export-services/index.html'),
        contact: resolve(rootDir, 'contact/index.html'),
      },
    },
  },
})
