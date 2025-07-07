/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Condensed': 'Avenir Next, sans-serif',
      'Standard': 'Avenir Next standard, sans-serif'
    },
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1050px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
    colors: {
      primary: {
        DEFAULT: '#3B82F6',
        light: '#3B82F6',
        dark: '#1E3A8A',
      },
      secondary: {
        DEFAULT: '#F59E0B',
        light: '#FCD34D',
        dark: '#B45309',
      },
      background: {
        DEFAULT: '#FFFFFF',
        dark: '#101010',
      },
      text: {
        DEFAULT: '#111827',
        dark: '#F3F4F6',
      },
    },
  },
  plugins: [],
}

