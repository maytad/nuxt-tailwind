module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        // transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
        // extend: {
        //     transitionProperty: ['hover', 'focus'],
        // },
    },
    plugins: [],
}