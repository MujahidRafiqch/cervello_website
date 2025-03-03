/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        Roboto: ["Sora"],
      },
      gradientColorStops: {
        "custom-start": "#1E1E1E00",
        "custom-mid": "#1E1E1ECC",
      },
      
    },
  },
  plugins: [],
};
