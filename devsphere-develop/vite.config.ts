import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "process.env.APP_API_URL": JSON.stringify(env.APP_API_URL),
    },
    plugins: [react()],
  };
});
