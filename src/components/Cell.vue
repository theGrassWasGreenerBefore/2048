<script setup>
defineProps({
  value: {
    type: String,
    required: true
  },
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="cell" :style="{ 'left': `${x * 100}px`, 'top': `${y * 100}px` }">
    {{ value }}
  </div>
</template>

<style scoped>
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
