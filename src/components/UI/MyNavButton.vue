<template>
  <button class="btnall">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-navbutton'
}
</script>

<style scoped>
.btnall {
    align-self: flex-end;
    width: 70px;
    margin: 5px;
    padding: 5px;
    background: #5085A5;
    border: 1px solid #5085A5;
    color: #000000;
    border-radius: 3px;
}

.btnall:hover{
    background:none;
    color: #ffffff;
}
</style>