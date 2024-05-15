/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'purple':'#624AFF',
        'light-purple':'#F3F1FF',
        'green':'#009A00',
        'gray':'#747474',
        'red':'#FF0000',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      screens:{
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    }
  },
  plugins: []
};
