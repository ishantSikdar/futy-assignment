/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'even': '0 4px 15px rgba(0, 0, 0, 0.05), 0 -4px 15px rgba(0, 0, 0, 0.05), 4px 0 15px rgba(0, 0, 0, 0.05), -4px 0 15px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        orange: '#F15206',
        lowWhite: '#1a1a1a',
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}