import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

declare const console: any;


export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    ["babel-plugin-react-compiler", {
                        sources: (filename: any) => {
                            console.log("filename", filename)
                            return true
                        }
                    }],
                ],
            },
        }),
        tailwindcss(),
    ],
})

