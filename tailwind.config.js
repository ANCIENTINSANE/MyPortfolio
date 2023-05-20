/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        screens: {
            '3xs': '320px',
            // => @media (min-width: 640px) { ... }

            '2xs': '375px',
            // => @media (min-width: 640px) { ... }

            'xs': '425px',
            // => @media (min-width: 640px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            '2md': '845px',
            // => @media (min-width: 690px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1440px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                GTAmericaExtendedRegular: "GT America Extended Regular",
            },
        }
    },
    plugins: []
};