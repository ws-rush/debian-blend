/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                debian: {
                    red: '#D70A53',
                    dark: '#A80841',
                    light: '#FF4F8B',
                },
                apple: {
                    gray: '#1d1d1f',
                    dark: '#000000',
                    blue: '#2997ff',
                    text: '#f5f5f7'
                }
            },
            fontFamily: {
                sans: ['Readex Pro', 'sans-serif'],
            },
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
            }
        }
    },
    plugins: [],
}
