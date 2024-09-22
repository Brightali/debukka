/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1100px",
        lg: "1200px",
        xl: "1400px",
      },
      colors: {
        main_red: "var(--main-red)",
        text_color_dark: "var(--text-color-dark)",
        text_color_light: "var(--text-color-light)",
        bg_color: "var(--bg-color)",
        border_color: "var(--border-color)",
        reverse_red: "var( --reverse-red)",
      },
    },
  },
  plugins: [],
};
