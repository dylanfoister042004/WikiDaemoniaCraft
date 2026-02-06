/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "daemonia-dark": "#0a0a0f",
        "daemonia-panel": "#12121a",
        "daemonia-accent": "#6b4bff",
        "daemonia-accent-soft": "#362e6e"
      },
      backgroundImage: {
        "solo-leveling-1": "url('/solo1.jpg')",
        "solo-leveling-2": "url('/solo2.jpg')",
        "solo-leveling-3": "url('/solo3.jpg')"
      }
    },
  },
  plugins: [],
}

