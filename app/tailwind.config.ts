import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    screens: {
      lg: "1200px",
      b: "1080px",
      md: "840px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      primary: {
        900: "#1d1527",
        800: "#33283d",
      },
      pink: "#e25691",
      blue: "#77f2da",
      yellow: "#eeae43",
      white: "#e8e4dd",
    },
  },
} satisfies Config;

export default config;
