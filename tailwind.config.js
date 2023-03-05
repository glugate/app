const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        // prettier-ignore
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
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
            gray: colors.gray,
            primary: {
                50: 'rgba(95, 129, 255, 0.1)',
                100: 'rgba(95, 129, 255, 0.2)',
                200: 'rgba(95, 129, 255, 0.3)',
                300: 'rgba(95, 129, 255, 0.4)',
                400: 'rgba(95, 129, 255, 0.5)',
                500: 'rgba(95, 129, 255, 0.6)',
                600: 'rgba(95, 129, 255, 0.7)',
                700: 'rgba(95, 129, 255, 0.8)',
                800: 'rgba(95, 129, 255, 0.9)',
                900: 'rgba(95, 129, 255, 1)',
            },
            secondary: colors.slate,
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
