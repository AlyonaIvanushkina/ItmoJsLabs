<template>
  <div id="app">
    <TaskManager />
  </div>
</template>

<script>
import TaskManager from './components/TaskManager.vue'

export default {
  name: 'App',
  components: {
    TaskManager
  }
}
</script>

<style>
#app {
    width: 300px;
    color: #2c3e50;
    margin: 60px auto;
}
</style>
