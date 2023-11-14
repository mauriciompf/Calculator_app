/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "league-spartan": ['League Spartan', 'sans-serif']
      },
      colors: {
        // Theme 1

        // Backgrounds
        'theme1-bg-main': 'hsl(222, 26%, 31%)',       // Very dark desaturated blue (main background)
        'theme1-bg-toggle': 'hsl(223, 31%, 20%)',     // Very dark desaturated blue (toggle background, keypad background)
        'theme1-bg-screen': 'hsl(224, 36%, 15%)',     // Very dark desaturated blue (screen background)

        // Keys
        'theme1-key-bg': 'hsl(225, 21%, 49%)',        // Desaturated dark blue (key background)
        'theme1-key-shadow': 'hsl(224, 28%, 35%)',    // Desaturated dark blue (key shadow)
        'theme1-key-red': 'hsl(6, 63%, 50%)',         // Red (key background, toggle)
        'theme1-key-red-shadow': 'hsl(6, 70%, 34%)',  // Dark red (key shadow)
        'theme1-key-orange-light': 'hsl(30, 25%, 89%)',// Light grayish orange (key background)
        'theme1-key-orange-shadow': 'hsl(28, 16%, 65%)',// Grayish orange (key shadow)

        // Text
        'theme1-text-dark': 'hsl(221, 14%, 31%)',     // Very dark grayish blue
        'theme1-text-white': 'hsl(0, 0%, 100%)',      // White
      },
    },
  },
  plugins: [],
}