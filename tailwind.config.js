/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          background: '#f8f8f8',
          error: '#e12147',
          "base-100": "#ffffff",
        },
      },
      // "dark",
      "cupcake",
    ],

  },

  plugins: [require("daisyui")],
}
