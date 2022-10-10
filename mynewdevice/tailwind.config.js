/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './products/templates/_base.html', './products/templates/index.html', './products/templates/productss.html',
    './node_modules/flowbite/plugin.js','./node_modules/flowbite/postcss.config.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
