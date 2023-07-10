/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "rotate(0deg)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

