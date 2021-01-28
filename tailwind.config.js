module.exports = {
  purge: [
    './src/**/*.html'
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {},
   plugins: [
     require('@tailwindcss/forms')
   ],
 }