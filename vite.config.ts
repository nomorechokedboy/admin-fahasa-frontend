import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            "@": resolve(__dirname, "src"),
            // eslint-disable-next-line no-undef
            "@scss": resolve(__dirname, "src/styles/scss"),
        },
    },
});
