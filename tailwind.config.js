/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#000000',
          secondary: '#cc955c',
          accent: '#706e67',
          neutral: '#3d4451',
          black: '#000000',
          'base-100': '#ffffff',
        },
      },
      // "dark",
      'cupcake',
    ],
  },
  plugins: [require('daisyui')],
}
