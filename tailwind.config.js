import { nextui } from '@nextui-org/theme'
import { Weight } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '50px',
              lineHeight: '40px',
            },
            h2: {
              fontSize: '24px',
              lineHeight: '32px',
            },
            h3: {
              fontSize: '22px',
              lineHeight: '32px',
            },
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Poppins", "sans-serif"],
        nunito_font_family: ['Nunito', 'sans-serif'],
        unbounded: ["Unbounded", "sans-serif"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        customGreen: '#5DB3C1',
        customBlack: '#0F171B',
        customAqua: '#99D8DE',
        servicesTextColor: '#5DB3C1',
      },
      backgroundImage: {
        'gradientCustomGreen': 'linear-gradient(to bottom, #F2BA00, #AB362E)',
      },

    },
  },
  darkMode: "class",
  plugins: [
        require('@tailwindcss/typography'),
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