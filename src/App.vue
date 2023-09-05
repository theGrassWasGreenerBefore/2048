<template>
 <h1>This is 2048</h1>
 <Game />
</template>

<script>
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    Game
  }
}
</script>

<style>
body {
  background: yellow;
}
</style>
