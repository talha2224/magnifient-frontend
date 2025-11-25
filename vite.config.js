import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
    allowedHosts: ["squid-app-w6bt4.ondigitalocean.app", "*.ondigitalocean.app"],
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
    allowedHosts: ["squid-app-w6bt4.ondigitalocean.app", "*.ondigitalocean.app"],
  },
});
