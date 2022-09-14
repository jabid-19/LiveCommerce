/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#a991f7',
          // primary: '#6a00de',
          secondary: '#f6d860',
          // secondary: '#ff9800',
          accent: '#37cdbe',
          // accent: '#00ADB5',
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
