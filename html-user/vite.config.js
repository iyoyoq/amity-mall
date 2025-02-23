import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImportPlugin from '@opentiny/unplugin-tiny-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), autoImportPlugin('vite')],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
