/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './content/**/*.{md,html}',
    './layouts/**/*.{html,js}',
    './assets/**/*.{js,jsx,ts,tsx}',
    './hugo_stats.json',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
