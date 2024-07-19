/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-1': "url('./assets/images/the_nativity_with_the_prophets_isaiah_and_ezekiel_1937.1.8.jpg')",
        'home-2': "url('./assets/images/tanya-prodaan-0Vefl6r61uQ-unsplash.jpg')",
      },
  },
  plugins: [],
}
}

