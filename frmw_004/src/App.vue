<template>
    <main id="app">
        <Powers/>
    </main>
</template>

<script>
    import Powers from './components/Powers.vue'

    export default {
        name: 'app',
        components: {
            Powers
        }
    }
</script>

<style>
    #app {
        width: 400px;
        margin: 40px auto;
    }
</style>