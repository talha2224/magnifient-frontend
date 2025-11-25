import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // important for container hosting
    allowedHosts: ["*.ondigitalocean.app"],
  },
  preview: {
    host: true,
    allowedHosts: ["*.ondigitalocean.app"],
  },
});
