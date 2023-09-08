<template>
  <div id="cells_container">
    <Cell v-for="cell in cells" :key="cell.id" :value="cell.value" :x="cell.x" :y="cell.y" />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import Cell from '@/components/Cell.vue'

export default {
  components: {
    Cell
  },
  data() {
    const store = useStore()
    return {
      cells: store.state.cells
    }
  }
}
</script>

<style scoped>
#cells_container {
  position: relative;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  border: 5px solid #333;
}
</style>
