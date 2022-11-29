/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctorthem: {
          primary: 'rgb(219 39 119)',
          secondary: '#19D3AE',
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
