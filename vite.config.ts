import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'microcms-js-sdk': 'microcms-js-sdk/dist/umd/microcms-js-sdk.js',
    },
  },
})
