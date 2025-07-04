module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#fd8b01',
      },
    },
  },
  safelist: [
    'bg-main', // Add this to ensure the class is not purged
  ],
  plugins: [],
};