import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "aurora-slow": "aurora 20s infinite alternate",
            },
            keyframes: {
                aurora: {
                    "0%": { transform: "scale(1) translate(0, 0)", opacity: "0.5" },
                    "50%": { transform: "scale(1.1) translate(-2%, 5%)", opacity: "0.4" },
                    "100%": { transform: "scale(1) translate(0, 0)", opacity: "0.5" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
