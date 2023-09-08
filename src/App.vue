<template>
  <div id="main_app">
    <Game />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Game from '@/components/Game.vue';

export default {
  name: 'App',

  components: {
    Game
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.commit('addCell', { id: '3e432e', x: 2, y: 2, value: 56 });
    });

    return {};
  }
};
</script>

<style>
#main_app {
  height: 100%;
  min-width: 600px;
  margin: 0 auto;
  margin: 0;
}
</style>
