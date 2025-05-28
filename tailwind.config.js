/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e2a78',
        accent: '#e11d48',
        neutral: {
          text: '#374151',
          bg: '#f9fafb',
        },
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

