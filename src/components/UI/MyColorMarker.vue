<template>
  <button class="marker">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-colormarker'
}
</script>

<style scoped>
.marker {
    align-self: flex-end;
    width: 30px;
    height: 30px;
    margin: 5px;
    padding: 5px;
    background: none;
    border: 1px solid #000000;
    border-radius: 20px;
}

.marker:hover{
  background: #F4A861;
  border: 1px solid #F4A861;
}
</style>