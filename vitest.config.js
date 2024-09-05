// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // Ensure you have a DOM environment for React Testing Library
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});
