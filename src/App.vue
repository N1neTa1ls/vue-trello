<template>
  <div id="app">
    <router-view></router-view>
    <Tasks />
  </div>
</template>

<script>
import Tasks from './components/Tasks.vue'

export default {
  name: 'App',
  components: {
    Tasks
  }
}
</script>

<style>

</style>
