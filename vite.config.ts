import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
// https://vitejs.dev/config/
export default defineConfig({
    base: "/furniture-eCommerce-react-app/",
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: "404.html",
                    dest: ".",
                },
            ],
        }),
    ],
});
