<template>
  <section class="screen kradus">
    <div class="info">
      <img src="../assets/kradus/img/logo-image.png" class="logo">
      <div class="info__text">
        <div class="title">
          Don't have an
          account?
        </div>
        <div class="subtitle">
          Register to access all the features of our service.
          Manage your business in one place. It's free!
        </div>
        <div class="social-links">
          <a href class="social-link">
            <img src alt>
          </a>
          <a href class="social-link">
            <img src alt>
          </a>
          <a href class="social-link">
            <img src alt>
          </a>
          <a href class="social-link">
            <img src alt>
          </a>
          <a href class="social-link">
            <img src alt>
          </a>
        </div>
      </div>
    </div>
    <div class="login">
      <div class="login__title">Sign up</div>
      <form class="login__form" autocomplete="off">
        <div class="login__line">
          <input
            v-model="email"
            @focus="emailFocus = true"
            @blur="emailFocus = false"
            id="input_email"
            name="email"
            type="email"
            class="login__input"
            autocomplete="off"
          >
          <label
            :class="{'login__label_focus':email.length > 0 || emailFocus==true}"
            class="login__label"
            for="input_email"
          >
            <span class="login__label-text">Email</span>
          </label>
        </div>
        <div class="login__line">
          <input
            v-model="login"
            @focus="loginFocus = true"
            @blur="loginFocus = false"
            id="input_login"
            name="email"
            type="email"
            class="login__input"
            autocomplete="off"
          >

          <label
            :class="{'login__label_focus':login.length > 0 || loginFocus==true}"
            class="login__label"
            for="input_login"
          >
            <span class="login__label-text">Login</span>
          </label>
        </div>
        <div class="login__line">
          <input
            v-model="password"
            @focus="passwordFocus = true"
            @blur="passwordFocus = false"
            id="input_password"
            name="password"
            type="password"
            class="login__input"
            autocomplete="off"
          >
          <label
            :class="{'login__label_focus':password.length > 0 || passwordFocus==true}"
            class="login__label"
            for="input_password"
          >
            <span class="login__label-text">Password</span>
          </label>
        </div>
        <div class="login__line">
          <input type="checkbox" class="login__checkbox-real" v-model="checkbox" name="terms">
          <div class="login__checkbox-fake">
            <div :class="{'login__checkbox-el_checked': checkbox==true}" class="login__checkbox-el"></div>
            <div class="login__checkbox-text">
              I agree to the all statements in
              <a href="#">Terms of service</a>
            </div>
          </div>
        </div>
        <div class="login__line login__line_buttons">
          <div class="login__signup">Sign up</div>
          <div class="login__signin">Have an account?</div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "kradus",
  data() {
    return {
      email: "",
      emailFocus: false,
      login: "",
      loginFocus: false,
      password: "",
      passwordFocus: false,
      checkbox: false
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400");
.kradus.screen {
  position: relative;
  margin: 0 auto;
  width: 1360px;
  height: 870px;
  overflow: hidden;
  box-shadow: -20px 30px 86px rgba(206, 67, 90, 0.4);
  background: url("../assets/kradus/img/main-bg.png") no-repeat fixed center;
  background-size: cover;

  font-family: "Montserrat", sans-serif;
}
.kradus {
  .info {
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    padding: 175px 0 100px 100px;
  }
  .logo {
    width: 120px;
  }
  .title {
    font-size: 42px;
    font-weight: 300;
    max-width: 290px;
    color: #fff;
    margin: 0 0 35px 0;
  }
  .subtitle {
    font-size: 17px;
    font-weight: 400;
    max-width: 465px;
    color: #bfa3cc;
  }
  .login {
    top: 0;
    right: 0;
    position: absolute;
    width: 570px;
    height: 100%;
    overflow: hidden;
    background: inherit;
    padding: 175px 100px 100px 70px;

    &::after {
      content: "";
      width: 120%;
      height: 120%;
      position: absolute;
      top: -40px;
      right: -40px;
      background: inherit;
      filter: blur(25px);
    }

    &__title {
      position: relative;
      font-size: 34px;
      font-weight: 300;
      color: #fff;
      z-index: 2;
      margin: 0 0 80px 0;
    }
    &__form {
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 2;
    }
    &__input {
      outline: none;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #bfa3cc;
      padding: 0 0 10px 0;

      width: 100%;
      color: #fff;
      font-weight: 400;
      font-size: 14px;

      &:active .login__title {
        color: black;
      }
    }
    &__line {
      position: relative;
      margin: 0 0 50px 0;

      &:last-of-type {
        margin: 0;
      }
      &_buttons {
        display: flex;
        align-items: center;
      }
    }
    &__label {
      position: absolute;
      top: 0;
      left: 0;
      transition: all ease 0.3s;
      &_focus {
        transform: translateY(-20px);
      }
      &-text {
        position: absolute;
        top: 0;
        font-size: 14px;
        font-weight: 400;
        color: #bfa3cc;
      }
    }
    &__checkbox {
      position: relative;
      &-real {
        position: absolute;
        opacity: 0;
        z-index: 2;
        width: 16px;
        height: 16px;
        cursor: pointer;
      }
      &-fake {
        display: flex;
        align-items: center;
      }
      &-text {
        color: #bfa3cc;
        font-size: 14px;
        font-weight: 400;
        margin: 0 0 0 15px;
        a {
          color: #fff;
          text-decoration: underline;
        }
      }
      &-el {
        position: relative;
        width: 16px;
        height: 16px;
        border: 1px solid #9f87a9;
        border-radius: 1px;
        &::after {
          content: "";
          width: 12px;
          height: 12px;
          top: 1px;
          left: 1px;
          position: absolute;
          background-color: transparent;
          transition: all ease 0.3s;
        }
        &_checked {
          &::after {
            background-color: #bfa3cc;
          }
        }
      }
    }
    &__signup {
      display: flex;
      align-items: center;
      position: relative;
      width: 160px;
      padding: 12px 35px;
      background-color: #e61436;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;
      transition: all ease 0.4s;

      &:hover {
        box-shadow: 0px 0px 45px rgba(206, 67, 90, 0.4);
      }
      &::after {
        content: url("../assets/kradus/img/arrow-icon.svg");
        position: absolute;
        right: 20px;
        height: 15px;
        width: 6px;
      }
    }
    &__signin {
      color: #9f87a9;
      font-size: 14px;
      font-weight: 400;
      margin: 0 0 0 35px;
      cursor: pointer;
    }
  }
}
</style>
