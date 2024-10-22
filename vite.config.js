import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches your netlify.toml configuration
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
});
