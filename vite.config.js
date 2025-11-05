import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/",   // <-- MUST match your GitHub repo name EXACTLY (lowercase)
  plugins: [react()],
});