/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'helvatica': ['system-ui', 'Helvetica Neue'],
      'serif': ['ui-serif', 'Georgia',],
    }
  },
  plugins: [],
}

