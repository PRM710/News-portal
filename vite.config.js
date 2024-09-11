export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',      // Bind to all available network interfaces
    port: process.env.PORT || 3000,  // Use the port provided by Render, or default to 3000
  }
})
