import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassDts from 'vite-plugin-sass-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sassDts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
