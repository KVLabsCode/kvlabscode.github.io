import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0c',
                surface: '#111114',
                foreground: '#e0e0e6',
                muted: '#8b8b9e',
                border: '#1e1e24',
                accent: {
                    DEFAULT: '#6366f1',
                    hover: '#818cf8',
                    muted: 'rgba(99, 102, 241, 0.15)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            fontSize: {
                'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
                'display-lg': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
                'display': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
            },
            animation: {
                'grain': 'grain 8s steps(10) infinite',
                'ambient-pulse': 'ambient-pulse 4s ease-in-out infinite',
            },
            keyframes: {
                grain: {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '10%': { transform: 'translate(-5%, -10%)' },
                    '20%': { transform: 'translate(-15%, 5%)' },
                    '30%': { transform: 'translate(7%, -25%)' },
                    '40%': { transform: 'translate(-5%, 25%)' },
                    '50%': { transform: 'translate(-15%, 10%)' },
                    '60%': { transform: 'translate(15%, 0%)' },
                    '70%': { transform: 'translate(0%, 15%)' },
                    '80%': { transform: 'translate(3%, 35%)' },
                    '90%': { transform: 'translate(-10%, 10%)' },
                },
                'ambient-pulse': {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.7' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
