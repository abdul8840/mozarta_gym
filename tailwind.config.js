/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  build: {
    outDir: 'dist', // This is the default value
  },
  theme: {
    extend: {},
  },
  plugins: [],
}