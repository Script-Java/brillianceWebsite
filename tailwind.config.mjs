/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        funnel: ["Funnel Display", "sans-serif"],
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light", "cupcake", "corporate", "night"],
  },

};
