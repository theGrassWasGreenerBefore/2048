import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      cells: [{ id: 'e3432e', x: 1, y: 1, value: 35 }]
    }
  },
  mutations: {
    addCell(state, cell) {
      state.cells.push(cell);
    }
  }
});