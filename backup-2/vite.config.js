import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
    middlewareMode: false,
  },
  plugins: [
    {
      name: "custom-routing",
      configureServer(server) {
        server.middlewares.use("/en", (req, res, next) => {
          if (req.url === "/en" || req.url === "/en/") {
            req.url = "/en/index.html";
          }
          next();
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        en: "./en/index.html",
        "pages/coming-soon": "./pages/coming-soon.html",
      },
    },
    copyPublicDir: true,
  },
  publicDir: "public",
});
