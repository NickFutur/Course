<template>
    <div>
    <section class="about">

        <form class="form-login">
            <div class="content__form">
                <h1>
                    Регистрация
                </h1>
                <input type="text" name="a" placeholder="Введите логин">
                <input type="email" name="b" placeholder="Введите email">
                <input type="password" name="c" placeholder="Введите пароль">
                <input type="password" name="c" placeholder="Подтвердите пароль">
                <my-button @click="$router.push('/')">
                    Зарегистрироваться
                </my-button>
                <router-link to="/" class="txt">Войти в систему</router-link>
            </div>
        </form>


    </section>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton';
    export default {
        components:{MyButton}
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
    width: 50%;
    height: 50%;
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
    /*косяк при увеличении ширины*/
    height: 2vw;
    margin-bottom: 1.5vw;
    border-radius: 0.52vw;
    border-color: #FFFFFF;
    outline: none;
    border: 0;
    padding-left: 10px;
}

.txt{
    font-size:12px;
    color:#000000;
}
</style>