import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F59E0B', // Amber 500
                    dark: '#D97706', // Amber 600
                },
                secondary: '#1F2937', // Gray 800
            },
            fontFamily: {
                sans: ['var(--font-poppins)'],
            },
        },
    },
    plugins: [],
};
export default config;
