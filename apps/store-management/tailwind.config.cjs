/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "50p": "50%",
        "60p": "60%",
      },
      minWidth: {
        "75p": "75%",
      },
    },
  },
  plugins: [],
};
