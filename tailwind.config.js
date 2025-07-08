/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1050px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
    colors: {
      primary: {
        default: '#FDC401',
        light: '#3B82F6',
        dark: '#1E3A8A',
      },
      secondary: {
        DEFAULT: '#F59E0B',
        light: '#FCD34D',
        dark: '#B45309',
      },
      background: {
        light: '#FFFFFF',
        light_extension: '#1010100d',
        dark: '#101010',
        dark_extension: '#ffffff0d',
        transparent: 'transparent',
      },
      text: {
        light: '#111827',
        light_extension: '#101010cc',
        dark: '#F3F4F6',
        dark_extension: '#ffffffcc',
      },
      lines: {
        light: '#1010101a',
        dark: '#ffffff1a',
      },
    },
  },
  plugins: [],
}

