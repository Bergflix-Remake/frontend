import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginRewriteAll from 'vite-plugin-rewrite-all'
import path from 'path'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pluginRewriteAll(), Pages({
    extensions: ['vue']
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@atoms': path.resolve(__dirname, './src/stories/atoms'),
      '@molecules': path.resolve(__dirname, './src/stories/molecules'),
      '@organisms': path.resolve(__dirname, './src/stories/organisms'),
    }
  },
})
