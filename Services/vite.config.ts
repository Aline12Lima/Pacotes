import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Services/", // CORRETO para GitHub Pages
  plugins: [react()],
});
