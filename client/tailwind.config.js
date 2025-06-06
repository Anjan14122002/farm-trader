/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        // Main Green Color
        'primary': '#4CAF50',
        // Accent Green Color
        'accent': '#8BC34A',
        'accent-yellow': '#FFD700',
        // White Color
        'white': '#FFFFFF',
        // Dark Gray Text Color
        'text': '#333333',
        // Light Gray Neutral Color
        'neutral': '#E0E0E0',
      },
    },
  },
  plugins: [],
}