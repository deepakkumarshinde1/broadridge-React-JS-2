import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "home-app",
      filename: "remoteFile.js",
      exposes: {
        "./Header": "./src/Header.jsx",
        "./Footer": "./src/Footer.jsx",
        "./CounterContext": "./src/context/counter.context.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
