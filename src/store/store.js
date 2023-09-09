import { createStore } from 'vuex';
import { gridReset } from '@/engine';

export const store = createStore({
  state() {
    return {
      cells: []
    }
  },
  mutations: {
    resetGrid(state) {
      gridReset(state.cells);
    }
  }
});