/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "userIcon": "0px 0px 50px #000",
        "inputShadow": " 0px 5px 5px rgba(0,0,0,.6)",
        
      },
      fontFamily: {
        "Fira": "'Fira Sans'"
      }
    },
  },
  plugins: [],
}