<template>
    <div class="main-body">
    <footer class="main-footer">
        <h4> &#169; Copyright 2022</h4>
        <h4>Администратор</h4>
    </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
* {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

.main-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-footer {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    color: #C8B4B4;
    width: 100%;
    background-color: #1B1818;
    width: 1750px;
}
</style>