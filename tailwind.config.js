const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'mainDarkColor': 'var(--main-dark-color)',
                'mainDarkLightColor': 'var(--mainDarkLightColor)',
                'mainTextColor': 'var(--mainTextColor)',
                'mainDarkenLightTextColor': 'var(--mainDarkenLightTextColor)',
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
