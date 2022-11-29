/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctorthem: {
          primary: 'rgb(190 24 93)',
          secondary: 'rgb(59 130 246)',
          neutral: '#3A4256',
          accent: "#343232",
           "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
