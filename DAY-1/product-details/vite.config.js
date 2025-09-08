import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "product-details",
      filename: "remoteFile.js",
      shared: ["react", "react-dom"],
      remotes: {
        homePage: "http://localhost:5001/assets/remoteFile.js",
      },
    }),
  ],
});
