import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, ".."));

  return {
    plugins: [react()],
    build: {
      target: "esnext",
    },
    define: {
      "process.env": {},
    },
    server: {
      port: 3001,
    },
    envDir: "..",
  };
});
