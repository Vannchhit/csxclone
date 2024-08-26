/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        translate: {
          "0%": { transform: "translateY(25%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        translate: "translate 1s ease-out",
        fade: "fadeOut 2s ease-in-out",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "footer-color": "#e8edf3",
        "csx-color-1": "#0000fe",
        "csx-color-2": "#0466df",
        "csx-color-3": "#c3892b",
      }),
      textColor: () => ({
        "csx-color-1": "#0000fe",
        "csx-color-2": "#0466df",
        "csx-color-3": "#c3892b",
      }),
    },
  },
  plugins: [],
  
};
