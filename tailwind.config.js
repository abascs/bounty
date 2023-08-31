/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout.js',
  ],theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  
  plugins: [],
}
