<template>
  <div id="main_app">
    <Game />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { CellItem } from '@/engine';
import Game from '@/components/Game.vue';

export default {
  name: 'App',

  components: {
    Game
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.commit('resetGrid');
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
