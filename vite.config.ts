import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const enableTagger = env.VITE_ENABLE_TAGGER === "true";
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && enableTagger && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
            router: ["react-router-dom"],
            query: ["@tanstack/react-query"],
            radix: ["@radix-ui/react-select", "@radix-ui/react-popover", "@radix-ui/react-tooltip"],
            icons: ["lucide-react"],
          },
        },
      },
    },
  };
});
