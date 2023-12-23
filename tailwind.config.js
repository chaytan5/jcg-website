/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#101112",
        lightYellow: "#F6CE71",
        darkYellow: "#F6B940",
        secondary: "#F2B833",
        gunmetal: "#2A3342",
        lightGray: "#D9D9D9",
        darkBlue: "#0C0375",
        royalBlue: "#002AFA",
        blueGreen: "#45ffa5",
        darkBlueGreen: "#1E7B65",
        footer: "#525A63",
      },
      borderRadius: {
        "4xl": "30px",
      },
      backgroundImage: {
        "contact-texture": "url('/art-bg.png')",
      },
      boxShadow: {
        "hero-button": "0px 4px 30px 0px rgba(0, 0, 0, 0.60)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
