<template>
    <div class="container">
        <button
            class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md"
        >
            Hover me
        </button>
        <div>
            <button class="transition delay-150 duration-300 ease-in-out">
                Hover me
            </button>
            <button
                class="bg-yellow-300 transition delay-300 duration-700 ease-in-out transform hover:scale-125text-white font-semibold px-1 py-1 rounded-md"
            >
                Hover me
            </button>
            <Logo />
            <h1 class="title">seo-form</h1>
            <div class="links">
                <a
                    href="https://nuxtjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="button--green"
                >
                    Documentation
                </a>
                <a
                    href="https://github.com/nuxt/nuxt.js"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="button--grey"
                >
                    GitHub
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import tailwindConfig from '~tailwind.config'
export default {
    name: 'Wowza',
    components: {
        Logo,
    },
    mounted() {
        console.log(tailwindConfig)
    },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
