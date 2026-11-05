import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// SPA mode kept so the GitHub workflow can also produce static files (_shell.html) for FTP hosting.
export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
    },
  },
});
