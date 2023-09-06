<template>
  <div id="cells_container">
    <div class="cell-wrap" v-for="cell in cells" :key="cell.id">
      <div class="cell" v-bind:style="{ 'left': `${cell.x * 100}px`, 'top': `${cell.y * 100}px` }">
        {{ cell.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.cell-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
}
.cell {
  position: absolute;
  width: 100px;
  height: 100px;
  background: green;
  text-align: center;
  font-size: 60px;
  color: white;
  padding: 20px 0;
}
</style>
