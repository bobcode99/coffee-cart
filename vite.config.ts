import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    sourcemap: true,
    minify: false
  },
  // server: {
  //   host: '0.0.0.0'
  // }
})
