<template>
  <main id="app">
    <h3>Связанные компоненты на Vue</h3>
    <RelatedInputs/>
  </main>
</template>

<script>
  import RelatedInputs from './components/RelatedInputs.vue'
  export default {
    name: 'app',
    components: {
      RelatedInputs
    }
  }
</script>

<style>
  #app {
    text-align: center;
    margin: 50px auto;
  }
</style>
