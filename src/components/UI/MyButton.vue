<template>
  <button class="btn-all">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn-all {
    align-self: center;
    width: 200px;
    margin: 5px;
    padding: 5px;
    background: #5085A5;
    border: 1px solid #5085A5;
    color: #ffffff;
    border-radius: 10px;
}

.btn-all:hover{
  color: #5085A5;
  background: #ffffff;
}
</style>