module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: '#2d3748', // Darker shade for text
        'background-text': '#C5CDDD', // Soft gray for backgrounds
        background: '#1a202c', // Darker background
        primary: '#2b6cb0', // Darker teal or blue
        'soft-cyan': '#7DFFFF',
      },
    },
  },
  plugins: [],
};
