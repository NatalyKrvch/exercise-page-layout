/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrayFont: '#141414',
        lightGrayFont: '#767A81',
        darkBackground: '#212121',
        mainButtonColor: '#BBF400',
      },
    },
  },
  plugins: [],
}
