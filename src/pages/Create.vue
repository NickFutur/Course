
<template>
<div>
      <navbar></navbar>
  <div class="main-body">
    <div class="conteiner">
        <section class="main-block">
            <div class="main-block__little">
                <p>Номер</p>
                <input type="text" class="inp-all" placeholder="Введите название">
            </div>
            <div class="main-block__little">
                <p>IP-адрес</p>
                <input type="text" class="inp-all" placeholder="Введите IP-адрес">
            </div>
            <div class="main-block__little">
                <p>Имя в домене</p>
                <input type="text" class="inp-all" placeholder="Введите имя в домене">
            </div>
            <div class="main-block__little">
                <p>Информация</p>
                <input type="text" class="inp-all" placeholder="Введите информацию">
            </div>
            <div class="main-block__little">
                <p>Фамилия</p>
                <input type="text" class="inp-all" placeholder="Введите фамилию">
            </div>
            <div class="main-block__little">
                <p>Имя</p>
                <input type="text" class="inp-all" placeholder="Введите имя">
            </div>
            <div class="main-block__little">
                <p>Отчество</p>
                <input type="text" class="inp-all" placeholder="Введите отчество">
            </div>
            <div class="main-block__little">
                <p>Логин</p>
                <input type="text" class="inp-all" placeholder="Введите логин">
            </div>
            <div class="main-block__little">
                <p>Пароль</p>
                <input type="text" class="inp-all" placeholder="Введите пароль">
            </div>
            <div class="main-block__little">
                <p>E-mail</p>
                <input type="text" class="inp-all" placeholder="Введите E-mail">
            </div>
            <div class="main-block__little">
                <p>Админ. E-mail</p>
                <input type="text" class="inp-all" placeholder="Введите админ. E-mail">
            </div>
            <div class="main-block__little">
                <p>PWD E-mail</p>
                <input type="text" class="inp-all" placeholder="Введите PWD E-mail">
            </div>
            <div class="main-block__little">
                <p>Расположение</p>
                <input type="text" class="inp-all" placeholder="Введите расположение">
            </div>
        </section>
        <my-button @click="$router.push('/info')">Добавить сотрудника</my-button>
    </div>

  </div>
  <main-footer></main-footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MyButton from '@/components/UI/MyButton.vue';
import Mynavbutton from '@/components/UI/MyNavButton.vue';
import MainFooter from '@/components/MainFooter.vue'
export default {
  components: {
    Navbar,
    MyButton,
    Mynavbutton,
    MainFooter,
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

.conteiner {
    display: flex;
    flex-direction: column;
    width: 1750px;
    background-color: #F7F9FB;
    align-items: center;
    min-height: 87vh;
}

/*Основной блок*/

.main-block {
    display: flex;
    flex-direction: column;
    padding: 20px 10px 10px 20px;
    width: 40%;
    margin: 30px;
    align-items: center;
    background-color: white;
    border: 1px solid #5085A5;
    border-radius: 10px;
}

.main-block__little {
    display: flex;
    color: #C8B4B4;
    margin: 10px;
}

.main-block__little p {
  padding-top: 5px;
    width: 120px;
}

.inp-all {
    width: 400px;
    padding: 10px;
    margin-left: 20px;
    height: 30px;
    border: 1px solid #5085A5;
    color: #000000;
    border-radius: 20px;
}



</style>