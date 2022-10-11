/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        bannerMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        bannerMoveAnimation: 'bannerMove 50s linear infinite',
      },
    },
  },
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
