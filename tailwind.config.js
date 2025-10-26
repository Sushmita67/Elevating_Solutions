/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'frutiger': ['Frutiger-Regular', 'sans-serif'],
        'frutiger-bold': ['Frutiger-Bold', 'sans-serif'],
        'frutiger-next': ['Frutiger-Next-Regular', 'sans-serif'],
        'frutiger-next-medium': ['Frutiger-Next-Medium', 'sans-serif'],
        'frutiger-next-bold': ['Frutiger-Next-Bold', 'sans-serif'],
      },
      colors: {
        'schindler-red': '#dc0000',
        'schindler-red-dark': '#c0102d',
      }
    },
  },
  plugins: [],
}
