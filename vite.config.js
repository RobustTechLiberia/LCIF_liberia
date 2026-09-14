import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [tailwindcss(), react()],
    base: process.env.VERCEL ? "/" : "/LCIF_liberia/",
  };
});
