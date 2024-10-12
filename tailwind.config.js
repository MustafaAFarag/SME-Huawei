module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',
        secondary: '#00a86b',
        accent: '#ffa500',
        background: '#f8f9fa',
        text: '#333333',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      animation: {
        carousel: 'carousel 20s linear infinite',
      },
    },
  },
  plugins: [],
};
