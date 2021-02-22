export default {
    telemetry: false,
    server: {
        port: process.env.PORT || 8000,
        host: '0.0.0.0',
        timing: false,
    },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'seo-form',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
        configPath: 'tailwind.config.js',
        exposeConfig: true,
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        analyze: false,
        // extractCSS: true,
        // optimization: {
        //     splitChunks: {
        //         chunks: 'all',
        //         // cacheGroups: {
        //         //     vendors: false,
        //         // },
        //     },
        // },
    },
}
