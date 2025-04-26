/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b04ff",       // Main button background
        accent: "#9e4ede",        // Accent color (e.g., highlights or hover)
        success: "#11b883",       // Success actions (e.g., success toast)
        dark: "#1d1f2c",          // Background dark theme
        darker: "#212528",        // Deeper dark variation
        light: "#ffffff",         // Light / text on dark
      },
    },
  },
  plugins: [],
};
