import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://arvyax-backend-lui0.onrender.com/",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
