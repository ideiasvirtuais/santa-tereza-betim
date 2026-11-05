import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// SPA mode: gera _shell.html para hospedagem estática (FTP).
export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
    },
  },
});
