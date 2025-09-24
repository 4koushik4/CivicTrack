import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:8888", // Only used during local dev
    },
  },
  build: {
    outDir: "dist", // Netlify will serve from here
  },
});
