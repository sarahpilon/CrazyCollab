import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/collab': {
        target: 'http://localhost:3000' //'https://main.d3a17xoen6fcqd.amplifyapp.com' for web hosting 
      }
    }
  }
})
