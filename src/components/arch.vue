<template>
  <section class="screen arch">
    <header class="header">
      <div class="menu">Menu</div>
      <div class="title">ARCH.</div>
      <div class="search">
        <span class="search__text">Search</span>
        <div
          @mouseenter="hoverSearchActive"
          @mouseleave="hoverSearchDisable"
          class="search__hover-trigger"
        ></div>
        <div :style="hoverSearchStyle" class="search__hover"></div>
      </div>
    </header>
    <div class="content-container">
      <div class="sidebar">
        <div class="sidebar__heading">
          <div class="sidebar__title">Architecture & Design</div>
          <div
            class="sidebar__subtitle"
          >Our projects are exampleasfs of attitudes rather than designs</div>
        </div>
        <div class="sidebar__image">
          <img src="../assets/arch/img/house_1-image.png">
        </div>
        <div class="sidebar__socials">
          <div class="sidebar__socials-container">
            <a href class="sidebar__socials-item">TW</a>
            <a href class="sidebar__socials-item">IN</a>
            <a href class="sidebar__socials-item">FB</a>
          </div>
        </div>
      </div>
      <div class="page swiper-container">
        <div class="page__switcher">
          <div class="page__switcher-prev">
            <img src="../assets/arch/img/arrow-icon.svg" alt>
          </div>
          <div id="pageCount" class="page__switcher-count">01</div>
          <div class="page__switcher-next">
            <img src="../assets/arch/img/arrow-icon.svg" alt>
          </div>
        </div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="page__content">
              <div class="page__image">
                <img src="../assets/arch/img/house_2-image.png" alt>
              </div>
              <div class="page__heading">
                <div class="page__title">INDIVIDUAL</div>
                <div class="page__slider">
                  <div class="page__slider-bar">
                    <div class="page__slider-bar-draggable"></div>
                  </div>
                  <div class="page__slider-switcher">
                    <div class="page__slider-prev">
                      <img src="../assets/arch/img/arrow-icon.svg" alt>
                    </div>
                    <div class="page__slider-next">
                      <img src="../assets/arch/img/arrow-icon.svg" alt>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-text-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us 1</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us 2</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us 3</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="page__content">
              <div class="page__image">
                <img src="../assets/arch/img/house_2-image.png" alt>
              </div>
              <div class="page__heading">
                <div class="page__title">INDIVIDUAL</div>
                <div class="page__slider">
                  <div class="page__slider-bar">
                    <div class="page__slider-bar-draggable"></div>
                  </div>
                  <div class="page__slider-switcher">
                    <div class="page__slider-prev">
                      <img src="../assets/arch/img/arrow-icon.svg" alt>
                    </div>
                    <div class="page__slider-next">
                      <img src="../assets/arch/img/arrow-icon.svg" alt>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-text-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us 1</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us 2</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us 3</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="page__content">
              <div class="page__image">
                <img src="../assets/arch/img/house_2-image.png" alt>
              </div>
              <div class="page__heading">
                <div class="page__title">INDIVIDUAL</div>
                <div class="page__slider">
                  <div class="page__slider-bar">
                    <div class="page__slider-bar-draggable"></div>
                  </div>
                  <div class="page__slider-switcher">
                    <div class="page__slider-prev">
                      <img src="../assets/arch/img/arrow-icon.svg" alt>
                    </div>
                    <div class="page__slider-next">
                      <img src="../assets/arch/img/arrow-icon.svg" alt>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-text-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="page__content">
              <div class="page__image">
                <img src="../assets/arch/img/house_2-image.png" alt>
              </div>
              <div class="page__heading">
                <div class="page__title">INDIVIDUAL</div>
                <div class="page__slider">
                  <div class="page__slider-bar">
                    <div class="page__slider-bar-draggable"></div>
                  </div>
                  <div class="page__slider-switcher">
                    <div class="page__slider-prev">
                      <img src="../assets/arch/img/arrow-icon.svg" alt>
                    </div>
                    <div class="page__slider-next">
                      <img src="../assets/arch/img/arrow-icon.svg" alt>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-text-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="page__text">
                      <h2>About us</h2>
                      <p>
                        Our specialized recruiters connect our
                        clients with architecture and design
                        talent across a variety of industries.
                      </p>
                      <p>
                        ARCH’s flexible services help your business find the
                        talent needed to support the architecture and design
                        phase of your projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer__first"></div>
      <div class="footer__second"></div>
      <div class="footer__third"></div>
    </footer>
  </section>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "arch",
  data() {
    return {
      hoverSearchStyle: {
        top: "0",
        right: "0",
        transform: "scale(0)"
      }
    };
  },
  methods: {
    getContainerWidth() {
      return window.innerWidth - (window.innerWidth - 1320) / 2 - event.screenX;
    },
    getContainerHeight() {
      return (window.innerHeight - 830) / 2;
    },
    hoverSearchActive(event) {
      this.hoverSearchStyle.top =
        event.pageY - this.getContainerHeight() + "px";
      this.hoverSearchStyle.right = this.getContainerWidth() + "px";
      this.hoverSearchStyle.transform = "scale(100)";
    },
    hoverSearchDisable(event) {
      this.hoverSearchStyle.top =
        event.pageY - this.getContainerHeight() + "px";
      this.hoverSearchStyle.right = this.getContainerWidth() + "px";
      this.hoverSearchStyle.transform = "scale(0)";
    }
  },
  mounted() {
    const vm = this;
    const pageCountEl = document.getElementById("pageCount");

    this.$options.pageSwiper = new Swiper(".swiper-container", {
      direction: "vertical",
      initialSlide: vm.$route.query.page - 1,
      speed: 1000,
      height: window.innerHeight,
      mousewheel: true,
      navigation: {
        nextEl: ".page__switcher-next",
        prevEl: ".page__switcher-prev"
      },
      on: {
        slideNextTransitionStart() {
          if (this.activeIndex + 1 < 10) {
            pageCountEl.textContent = "0" + (this.activeIndex + 1);
          } else {
            pageCountEl.textContent = this.activeIndex + 1;
          }
          vm.$router.push({ query: { page: this.activeIndex + 1 } });
        },

        slidePrevTransitionStart: function() {
          if (this.activeIndex + 1 < 10) {
            pageCountEl.textContent = "0" + (this.activeIndex + 1);
          } else {
            pageCountEl.textContent = this.activeIndex + 1;
          }
          vm.$router.push({ query: { page: this.activeIndex + 1 } });
        }
      }
    });
    this.$options.pageTextSwiper = new Swiper(".swiper-text-container", {
      direction: "horizontal",
      speed: 1000,
      width: 870,
      preventInteractionOnTransition: true,
      nested: true,
      snapOnRelease: false,
      navigation: {
        nextEl: ".page__slider-next",
        prevEl: ".page__slider-prev"
      },
      scrollbar: {
        el: ".page__slider-bar",
        draggable: false,
        dragClass: "page__slider-bar-draggable"
      }
    });
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: FuturaItalic;
  src: url("../assets/arch/fonts/FuturaItalic.otf");
}
@font-face {
  font-family: Futura;
  src: url("../assets/arch/fonts/FuturaRegular.otf");
  font-weight: 400;
}
@font-face {
  font-family: Futura;
  src: url("../assets/arch/fonts/FuturaLight.ttf");
  font-weight: 300;
}
@font-face {
  font-family: Futura;
  src: url("../assets/arch/fonts/FuturaBold.otf");
  font-weight: 700;
}
.arch.screen {
  position: relative;
  margin: 0 auto;
  max-width: 1360px;
  height: 870px;
  overflow: hidden;
  box-shadow: -20px 30px 86px rgba(79, 153, 210, 0.4);
}
.arch {
  .header {
    display: flex;
  }
  .menu {
    color: #555555;
    font-family: Futura;
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    width: 100%;
    padding: 60px 0 0 100px;
    max-width: 350px;
    height: 140px;
    border-right: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    cursor: pointer;

    &::before {
      content: url("../assets/arch/img/menu-icon.svg");
      margin: 0 16px 0 0;
    }
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555555;
    font-family: FuturaItalic;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    font-style: italic;
    max-width: 140px;
    width: 100%;
    height: 140px;
    border-right: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
  }
  .search {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;

    width: 870px;
    height: 140px;
    padding: 56px 99px 0 0;
    cursor: pointer;
    &__text {
      position: relative;
      z-index: 2;
      transition: all ease 1s;
      color: #555555;
      font-family: Futura;
      font-size: 16px;
      font-weight: 400;
      font-style: italic;
      &::after {
        content: url("../assets/arch/img/search-icon.svg");
        margin: 3px 0 0 16px;
        vertical-align: middle;
      }
    }
    &__hover-trigger {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 3;
      left: 0;
      top: 0;
    }
    &__hover {
      position: absolute;
      background-color: #a8d1f1;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      top: 0;
      transition: transform ease 2s;
      z-index: 0;
    }
  }
  .content-container {
    display: flex;
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    &__heading {
      display: flex;
      flex-direction: column;
      width: 350px;
      height: 330px;
      padding: 50px 0 0 100px;
      border-bottom: 1px solid #eaeaea;
      border-right: 1px solid #eaeaea;
    }
    &__title {
      font-family: FuturaItalic;
      font-size: 30px;
      font-weight: 600;
      font-style: italic;
      line-height: 34px;
      max-width: 160px;
    }
    &__subtitle {
      opacity: 0.7;
      color: #555555;
      font-family: Futura;
      font-size: 16px;
      font-weight: 300;
      font-style: italic;
      line-height: 26px;
      max-width: 200px;
      margin: 25px 0 0 0;
    }
    &__image {
      position: relative;
      background-color: #a8d1f1;
      border-bottom: 1px solid #eaeaea;
      border-right: 1px solid #eaeaea;
      height: 140px;
      width: 350px;
      img {
        position: absolute;
        top: -69px;
      }
    }
    &__socials {
      height: 230px;
      width: 350px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      border-bottom: 1px solid #eaeaea;
      border-right: 1px solid #eaeaea;
      &-container {
        display: flex;
        margin: 0 0 50px 0;
      }
      &-item {
        color: #555555;
        font-family: Futura;
        font-size: 16px;
        font-weight: 400;
        font-style: italic;
        text-transform: uppercase;
        margin: 0 45px 0 0;
        text-decoration: none;
        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
  .page {
    display: flex;
    &__switcher {
      &-prev {
        width: 140px;
        height: 330px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        border-bottom: 1px solid #eaeaea;
        border-right: 1px solid #eaeaea;
        img {
          margin: 35px 0 0 0;
          transform: rotate(180deg);
          cursor: pointer;
        }
      }
      &-count {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140px;
        height: 140px;
        color: #555555;
        font-family: Futura;
        font-size: 20px;
        font-weight: 400;
        border-bottom: 1px solid #eaeaea;
        border-right: 1px solid #eaeaea;
      }
      &-next {
        width: 140px;
        height: 230px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border-bottom: 1px solid #eaeaea;
        border-right: 1px solid #eaeaea;

        img {
          margin: 0 0 50px 0;
          cursor: pointer;
        }
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
    }
    &__image {
      position: relative;
      background-color: #4f99d2;
      width: 870px;
      height: 330px;
      border-bottom: 1px solid #eaeaea;
      z-index: 2;
      img {
        top: -108px;
        right: 0;
        position: absolute;
      }
    }
    &__heading {
      display: flex;
      align-items: center;
      height: 140px;
      width: 870px;
      border-bottom: 1px solid #eaeaea;
    }
    &__title {
      color: #4d4d4d;
      font-family: Futura;
      font-size: 40px;
      font-weight: 400;
      text-transform: uppercase;
      margin: 0 0 0 95px;
    }
    &__slider {
      display: flex;
      align-items: center;
      margin: 0 0 0 130px;
      &-bar {
        position: relative;
        width: 240px;
        height: 2px;
        background: #e2e2e2;

        &-draggable {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            width: 80px;
            height: 2px;
            background: #4f99d2;
            top: 0;
          }
        }
      }
      &-switcher {
        display: flex;
        align-items: center;
        margin: 0 0 0 55px;
      }
      &-next {
        height: 25px;
        img {
          transform: rotate(-90deg);
          cursor: pointer;
        }
      }
      &-prev {
        height: 25px;
        margin: 0 20px 0 0;
        img {
          transform: rotate(90deg);
          cursor: pointer;
        }
      }
    }
    &__text {
      height: 230px;
      width: 870px;
      border-bottom: 1px solid #eaeaea;
      padding: 55px 0 0 100px;

      h2 {
        color: #4d4d4d;
        font-family: Futura;
        font-size: 26px;
        font-weight: 600;
        font-style: italic;
        margin: 0 0 20px 0;
      }
      p {
        display: inline-block;
        opacity: 0.7;
        color: #555555;
        font-family: Futura;
        font-size: 14px;
        font-weight: 300;
        font-style: italic;
        line-height: 24px;
        max-width: 280px;
        margin: 20px 115px 20px 0;
        &:last-of-type {
          margin: 20px 0 20px 0;
        }
      }
    }
  }
  .footer {
    height: 30px;
    display: flex;
    bottom: 0;
    position: absolute;
    &__first {
      width: 350px;
      height: 100%;
      border-right: 1px solid #eaeaea;
    }
    &__second {
      width: 140px;
      height: 100%;
      border-right: 1px solid #eaeaea;
      background-color: #4f99d2;
    }
  }
  .swiper-text-container {
    overflow-y: hidden;
    cursor: -webkit-grab;
    .swiper-wrapper {
      display: flex;
      width: 100%;
    }
  }
}
</style>
