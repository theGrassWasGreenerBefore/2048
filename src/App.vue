<template>
  <div id="main_app">
    <h1>This is {{ templateNumber }}</h1>
    <Game />
  </div>
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    Game
  },
  data() {
    return {
      templateNumber: 2048
    }
  }
}
</script>

<style>
#main_app {
  height: 100%;
  min-width: 600px;
  margin: 0 auto;
  margin: 0;
}
</style>
