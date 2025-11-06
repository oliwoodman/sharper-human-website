import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sharper-black': '#000000',
        'sharper-off-white': '#f5f5f5',
        'sharper-dark-grey': '#1a1a1a',
        'sharper-mid-grey': '#666666',
        'sharper-copper': '#d4a574',
      },
      fontWeight: {
        'ultra-thin': '100',
        'extra-light': '200',
      },
      letterSpacing: {
        'ultra-wide': '0.5em',
        'extra-wide': '0.3em',
        'wide-cta': '0.15em',
      },
    },
  },
  plugins: [],
};

export default config;
