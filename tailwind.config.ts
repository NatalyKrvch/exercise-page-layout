import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGrayFont: '#141414',
        lightGrayFont: '#767A81',
        darkBackground: '#212121',
        mainButtonColor: '#BBF400',
      },
    },
  },
  plugins: [],
};

export default config;

