module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
   daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#19D3AE",

          secondary: "#0FCFEC",
          
          accent: "#3A4256",

          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
