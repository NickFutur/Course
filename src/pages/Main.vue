<template>
  <div>
    <section class="about">

        <form class="form-login">
            <div class="content__form">
                <h1>
                    Вход в систему
                </h1>
                <input type="email" placeholder="Введите email">
                <input type="password" placeholder="Введите пароль">
                <my-button  @click="$router.push('/info')">
                    Войти
                </my-button>
                <router-link to="/registration" class="txt">Создать аккаунт</router-link>
            </div>
        </form>


    </section>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
  export default {
  components: { MyButton },
    
  }
</script>

<style scoped>
* {
    margin: 0 auto;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

.about {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #F7F9FB;
}

.form-login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 40%;
    border: 0.156vw solid silver;
    padding: 0.677vw;
    border-radius: 0.521vw;
    border-color: #5085A5;
    background-color: #F7F9FB;
}

.content__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    padding-bottom: 1.5vw;
    font-size: 2vw;
}

input {
    width: 100%;
    height: 2vw;
    padding-left: 10px;
    margin-bottom: 1.5vw;
    border-radius: 0.52vw;
    border-color: #FFFFFF;
    outline: none;
    border: 0;
}

.txt{
  color: #000000;
  font-size: 12px;
}
</style>