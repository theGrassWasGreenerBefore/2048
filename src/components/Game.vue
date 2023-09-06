<template>
  <div id="cells_container">
    <Cell v-for="cell in cells" :key="cell.id" :value="cell.value" :x="cell.x" :y="cell.y" />
  </div>
</template>

<script>
import Cell from '@/components/Cell.vue'
export default {
  components: {
    Cell
  },
  data() {
    return {
      cells: [{ id: 'e3432e', x: 1, y: 1, value: 35 }, { id: '3e432e', x: 2, y: 2, value: 56 }]
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
