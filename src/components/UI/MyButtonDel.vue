<template>
  <button class="btn-del">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-buttondel'
}
</script>

<style scoped>
.btn-del {
    align-self: flex-end;
    width: 70px;
    margin: 5px;
    padding: 5px;
    background: none;
    border: 1px solid rgb(168, 19, 19);
    color: rgb(168, 19, 19);
    border-radius: 3px;
}

.btn-del:hover{
  color: rgb(255, 255, 255);
  background: rgb(168, 19, 19);
}
</style>