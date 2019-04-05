<template>
  <div class="screen owlery">
    <div class="screen__fake-bg" :style="fakeScreenStyle" @mousemove="textParallax"></div>
    <header class="header">
      <div class="container">
        <div class="menu">
          <div class="menu__line"></div>
        </div>
        <img src="../assets/owlery/img/logo-image.png" alt class="logo">
        <div class="lang">
          <span class="lang__item lang__item_selected">ENG</span>
          <div class="lang__divider">/</div>
          <span class="lang__item">RUS</span>
        </div>
      </div>
    </header>
    <div class="content-box">
      <div :style="titleStyle" class="title">COMING SOON</div>
      <div class="subtitle">There will be something very awesome</div>
      <div class="timer">
        <div class="timer__item">
          <div class="timer__item-number">{{ days | two_digits }}</div>
          <div class="timer__item-title">days</div>
        </div>
        <div class="timer__item-divider">:</div>
        <div class="timer__item">
          <div class="timer__item-number">{{ hours | two_digits }}</div>
          <div class="timer__item-title">hours</div>
        </div>
        <div class="timer__item-divider">:</div>
        <div class="timer__item">
          <div class="timer__item-number">{{ minutes | two_digits }}</div>
          <div class="timer__item-title">minutes</div>
        </div>
        <div class="timer__item-divider">:</div>
        <div class="timer__item">
          <div class="timer__item-number">{{ seconds | two_digits }}</div>
          <div class="timer__item-title">seconds</div>
        </div>
      </div>
      <div class="subtitle"></div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="social-links">
          <a href class="social-links__item">
            <img src="../assets/owlery/img/facebook-icon.png" alt>
          </a>
          <a href class="social-links__item">
            <img src="../assets/owlery/img/instagram-icon.png" alt>
          </a>
          <a href class="social-links__item">
            <img src="../assets/owlery/img/twitter-icon.png" alt>
          </a>
        </div>
        <div class="contact">
          <div class="contact__text">
            <div class="contact__title">Subscribe to our newsletter</div>
            <div class="contact__email">example@mail.com</div>
          </div>
          <a href="mailto:example@mail.com" class="contact__icon">
            <img src="../assets/owlery/img/email-icon.png" alt>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "owlery",
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: "2019-05-31 12:25:00",
      titleStyle: {
        transform: ""
      },
      fakeScreenStyle: {
        width: window.innerWidth + "px",
        height: window.innerHeight + "px",
        left: "-" + (window.innerWidth - 1360) / 2 + "px",
        top: "-" + (window.innerHeight - 870) / 2 + "px"
      }
    };
  },
  methods: {
    textParallax(event) {
      this.titleStyle.transform =
        "translate(" + event.pageX * 0.05 + "px," + event.pageY * 0.05 + "px)";
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  },
  filters: {
    two_digits: value => {
      if (value < 0) {
        return "00";
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: Montesrrat;
  src: url("../assets/owlery/fonts/Montserrat-ExtraLight.otf");
  font-weight: 200;
}
@font-face {
  font-family: Montesrrat;
  src: url("../assets/owlery/fonts/Montserrat-Light.otf");
  font-weight: 300;
}
@font-face {
  font-family: Montesrrat;
  src: url("../assets/owlery/fonts/Montserrat-Medium.otf");
  font-weight: 500;
}
@font-face {
  font-family: Montesrrat;
  src: url("../assets/owlery/fonts/Montserrat-Bold.otf");
  font-weight: 700;
}
@font-face {
  font-family: Montesrrat;
  src: url("../assets/owlery/fonts/Montserrat-Black.otf");
  font-weight: 900;
}
.owlery.screen {
  font-family: Montesrrat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  max-width: 1360px;
  height: 870px;
  box-shadow: -20px 30px 86px rgba(221, 184, 77, 0.4);
  background: url("../assets/owlery/img/main-bg.png") no-repeat center;
  background-size: cover;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/owlery/img/main_parallax-bg.png") no-repeat
      center;
    background-size: cover;
    z-index: 2;
  }
}
.screen__fake-bg {
  position: absolute;
  z-index: 4;
}
.owlery {
  .container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }
  .header {
    position: relative;
    padding: 30px 0 0 0;
    .container {
      display: flex;
      justify-content: space-between;
    }
  }
  .logo {
    position: absolute;
    left: 50%;
  }
  .menu {
    position: relative;
    z-index: 5;
    cursor: pointer;
    &__line {
      width: 15px;
      height: 2px;
      background-color: #fff;
      margin: 4px 0;
    }
    &::before {
      content: "";
      display: block;
      width: 15px;
      height: 2px;
      background-color: #fff;
    }
    &::after {
      content: "";
      display: block;
      width: 8px;
      height: 2px;
      background-color: #fff;
    }
  }
  .lang {
    position: relative;
    display: flex;
    z-index: 4;
    &__item {
      font-weight: 700;
      font-size: 12px;
      color: #99999a;
      cursor: pointer;
      letter-spacing: 1px;
      &_selected {
        color: #fff;
      }
    }
    &__divider {
      color: #fff;
      font-weight: 700;
      font-size: 12px;
      margin: 0 15px;
    }
  }
  .content-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .title {
    position: relative;
    color: #fff;
    font-weight: 900;
    font-size: 126px;
    text-transform: uppercase;
    text-align: center;
    z-index: 1;
    line-height: 110px;
    margin: 0 0 50px 0;
    max-width: 550px;
    transition: all ease 0.1s;
    left: -60px;
  }
  .subtitle {
    position: relative;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    z-index: 3;
  }
  .timer {
    position: relative;
    display: flex;
    align-items: center;
    margin: 70px 0 0 0;
    z-index: 3;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80px;
      &-number {
        font-size: 68px;
        font-weight: 200;
        color: #e2e7f2;
      }
      &-title {
        font-size: 16px;
        font-weight: 300;
        color: #e2e7f2;
      }
      &-divider {
        position: relative;
        top: -10px;
        font-size: 58px;
        font-weight: 200;
        color: #e2e7f2;
        margin: 0 70px;
      }
    }
  }
  .footer {
    position: relative;

    padding: 0 0 30px 0;
    .container {
      display: flex;
      justify-content: space-between;
    }
  }
  .social-links {
    display: flex;
    &__item {
      position: relative;
      z-index: 4;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      border: 1px solid #565758;
      margin: 0 10px 0 0;
      &:last-of-type {
        margin: 0;
      }
    }
  }
  .contact {
    position: relative;
    display: flex;
    align-items: center;
    z-index: 4;
    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__title {
      font-size: 11px;
      font-weight: 500;
      color: #b0b3a9;
    }
    &__email {
      font-size: 16px;
      font-weight: 500;
      color: #f5f5f5;
    }
    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      border: 1px solid #565758;
      margin: 0 0 0 20px;
    }
  }
}
</style>
