/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/assets/img/windows-11-4k-green-mountains-tv44q00590kttb6m.jpg')",
      },
    },
  },
  plugins: [],
}