/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        wave: "wave 1s ease infinite", // default (can override duration inline)
      },
    },
    sans: ["Proxima Nova Regular", "sans-serif"],
  },
  plugins: [require("tailwind-scrollbar")],
};
