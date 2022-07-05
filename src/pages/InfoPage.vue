<template>
<div>
    <navbar></navbar>
    <main-table></main-table>
<main-footer></main-footer>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import MainFooter from '@/components/MainFooter.vue';
import MainTable from '@/components/MainTable.vue';
    export default {
        components:{
            Navbar,
            MainFooter,
            MainTable,
        }
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

.container{
    min-height: 90vh;
}
</style>