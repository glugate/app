const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        // prettier-ignore
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            red: colors.red,
            orange: colors.orange,
            yellow: colors.yellow,
            green: colors.green,
            gray: colors.slate,
            main: {
                100: 'rgba(95, 129, 255, 0.4)',
                300: 'rgba(95, 129, 255, 0.5)',
                400: 'rgba(95, 129, 255, 0.6)',
                500: 'rgba(95, 129, 255, 0.7)',
                600: 'rgba(95, 129, 255, 0.8)',
                700: 'rgba(95, 129, 255, 0.85)',
                800: 'rgba(95, 129, 255, 0.9)',
                900: 'rgba(95, 129, 255, 1)',
            },
        },
        extend: {
            borderColor: theme => ({
                DEFAULT: theme('colors.gray.200', 'currentColor'),
            }),
            fontFamily: {
                sans: ['Cerebri Sans', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: theme => ({
                outline: '0 0 0 2px ' + theme('colors.indigo.500'),
            }),
            fill: theme => theme('colors'),
        },
    },
    variants: {
        extend: {
            fill: ['focus', 'group-hover'],
        },
    },
    plugins: [],
}
