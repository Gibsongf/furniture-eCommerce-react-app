import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
// https://vitejs.dev/config/
export default defineConfig({
    base: "/furniture-eCommerce-react-app/", // importante para GitHub Pages
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: "404.html", // arquivo de redirecionamento
                    dest: ".", // será copiado para dist/404.html
                },
            ],
        }),
    ],
});
