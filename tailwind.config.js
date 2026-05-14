const { secondary } = require("@material-tailwind/html/theme/base/colors");
const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: [
    './index.html', './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:  '#0b112b',
        secondary: '#06d2dd',        
      },
      minHeight: {
        '128': '32rem',
      },
      minWidth: {
        '128': '32rem'
      },
    },
  },
  plugins: [],
});