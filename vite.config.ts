import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/furniture-ecommerce-react-app/",
    plugins: [react()],
});
