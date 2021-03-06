import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://chalharb.github.io/loganharber/",
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json-summary", "json", "html"],
    },
  },
});
