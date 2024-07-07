/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Ruta para los archivos en src/app
    './src/components/**/*.{js,ts,jsx,tsx}', // Ruta para los archivos en src/components (si es que tienes)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
