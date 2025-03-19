/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",

    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  


  // npm install -D autoprefixer postcss - legit more specific
  // npm install -D @tailwindcss/postcss ----> very specific - rarely used*
  // OR 
  // Download TailwindCss Postcss Autoprefixer
  // npm install -D tailwindcss postcss autoprefixer ---> legit most commonly used
