/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F43F5E", // cor principal
        base: "#F5F5F4",    // fundo claro
        secondary: "#6B7280",
      },
    },
  },
  plugins: [],
}
