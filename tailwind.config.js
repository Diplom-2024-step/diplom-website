import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Poppins", "sans-serif"],
        nunito_font_family: ['Nunito', 'sans-serif'],
        unbounded: ["Unbounded", "sans-serif"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        customGreen: '#5DB3C1',
        customBlack: '#0F171B',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {
          },
          colors: {
            primary: "#5DB3C1",
            background: "#FFFFFF",
          },
        },
        dark: {
          colors: {
            default: "#5DB3C1",
            background: "#FFFFFF",
          },
        },
      },
    }),
  ],
};