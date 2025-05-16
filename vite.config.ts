import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from "path"

declare const console: any;


export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    /*
                    ["babel-plugin-react-compiler", {
                        sources: (filename: any) => {
                            console.log("filename", filename)
                            return true
                        }
                    }],
                    */
                ],
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})

