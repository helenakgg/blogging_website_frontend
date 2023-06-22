/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {colors: {
      primary: {"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#f59e0b","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f"}
    }
  },
  fontFamily: {
    'body': [
  'Slabo 27px', 
  'ui-sans-serif', 
  'system-ui', 
  '-apple-system', 
  'system-ui', 
  'Segoe UI', 
  'Roboto', 
  'Helvetica Neue', 
  'Arial', 
  'Noto Sans', 
  'sans-serif', 
  'Apple Color Emoji', 
  'Segoe UI Emoji', 
  'Segoe UI Symbol', 
  'Noto Color Emoji'
],
    'sans': [
  'Slabo 27px', 
  'ui-sans-serif', 
  'system-ui', 
  '-apple-system', 
  'system-ui', 
  'Segoe UI', 
  'Roboto', 
  'Helvetica Neue', 
  'Arial', 
  'Noto Sans', 
  'sans-serif', 
  'Apple Color Emoji', 
  'Segoe UI Emoji', 
  'Segoe UI Symbol', 
  'Noto Color Emoji'
]
  }

  },
  plugins: [
    require('flowbite/plugin')
  ],
}

