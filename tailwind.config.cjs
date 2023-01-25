/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
    "primary1": "#650360",
    "primary2": "#662560",
    "primary3": "#8A3575",
    "primary4": "#8A3877",
    "primary5": "#371447",
    "extra":"#DC6594",
    "extra2":"#D461E7", 
    "extra2":"#FFF7F1",
    "extra3":"#00857F",
    "extra4": "#0071C5"
      },
      fontFamily:{
        poppin:["Poppins", "sans-serif"]
      }
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}
