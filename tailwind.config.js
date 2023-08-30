/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ['"Rubik"', 'sans-serif']
      },
      colors: {
        "pale-violet": "hsl(276, 100%, 81%)",
        "moderate-violet": "hsl(276, 55%, 52%)",
        "desaturated-dark-violet": "hsl(271, 15%, 43%)",
        "grayish-blue": "hsl(206, 6%, 79%)",
        "very-dark-desaturated-violet": "hsl(271, 36%, 24%)",
        "dark-grayish-violet": "hsl(270, 7%, 64%)",

        "light-magenta": "hsl(293, 100%, 63%)",
        "light-violet": "hsl(264, 100%, 61%)",

        "white": "hsl(0, 0%, 100%)",
        "light-grayish-violet": "hsl(270, 20%, 96%)",
        "very-light-magenta": "hsl(289, 100%, 72%)"
      }
    },
  },
  plugins: [],
}
