import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all your source files
    './public/index.html',        // Include your HTML files if applicable
  ],
  theme: {
    extend: {}, // Customize your theme here
  },
  plugins: [], // Add any Tailwind plugins here
};

export default config;