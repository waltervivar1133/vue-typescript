/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.ts"
  ],
  theme: {
    extend: {
      colors: {
        "green-base" : "#27A376",
        "green-secondary" : "#00A19B",
        "error": "#E03137",
        "success" : "#0CAF60",
        "gray-scale-100": "#F8F8F8",
        "gray-scale-300":"#E9EAEC",
        "gray-scale-500":"#A0AEC0",
        "gray-scale-600" : "#687588",
        "gray-scale-900":"#111827",
        "orange-base" : "#EB6F25"
        
      },
      maxWidth: {
        "10xl" :"1900px"
      },
      lineHeight: {
        "12" : "22.4px",
        "13" : "31.2px",
        "14" : "27px",
        "15" : "57.6px"
      }
    },
  },
  plugins: [],
}