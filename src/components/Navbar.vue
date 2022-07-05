<template>
  <div class="navbar">
    <header class="main-head">
            <section class="main-head__title">
                <h1>Администратор</h1>
                <div>
                    <input type="text" name="search" class="search-inp" placeholder="Поиск">
                    <mynavbutton @click="$router.push('/')">
                     Выйти
                    </mynavbutton>
                </div>
            </section>

            <nav class="main-head__nav">
                <router-link to="/info" class="txt">Данные о сотрудниках</router-link>
                <h4>Сортировка</h4>
                <router-link to="/create" class="txt">Добавить сотрудника</router-link>
            </nav>
        </header>
  </div>
</template>

<script>
import Mynavbutton from '@/components/UI/MyNavButton.vue';
export default {
  components: {
    Mynavbutton
  }
}
</script>

<style scoped>
.navbar{
  margin: 0 auto;
  width: 1750px;
}
.main-head {
    display: flex;
    flex-direction: column;
    color: #C8B4B4;
    width: 100%;
}

.main-head__title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    background-color: #1B1818;
}

.main-head__nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    color: #FFFFFF;
    background-color: rgb(27, 24, 24, 0.5);
}

.search-inp {
    width: 200px;
    height: 25px;
    border: 1px solid #5085A5;
    color: #000000;
    border-radius: 3px;
    padding: 10px;
}

.btn-all {
    align-self: flex-end;
    width: 70px;
    margin: 5px;
    padding: 5px;
    background: #5085A5;
    border: 1px solid #5085A5;
    color: #000000;
    border-radius: 3px;
}

.txt{
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
}
</style>