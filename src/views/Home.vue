<template>
  <div class="swiper-section fadeInDown animated">
    <div class="swiper-wrapper swiper-section__wrapper">
      <div class="swiper-slide" v-for="component in $options.components" :key="component.id">
        <component :is="component"></component>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/animate.css";

import Swiper from "swiper";
import Arch from "../components/arch.vue";
import Kradus from "../components/kradus.vue";
import Owlery from "../components/owlery.vue";

export default {
  components: { Kradus, Arch, Owlery },
  data() {
    return {};
  },
  mounted() {
    const vm = this;
    const pagesList = Object.keys(vm.$options.components);
    let pageParams = vm.$route.params.page;
    let initialSlideNumber = vm.find(pagesList, pageParams);
    this.$options.componentsSwiper = new Swiper(".swiper-section", {
      initialSlide: initialSlideNumber,
      direction: "horizontal",
      speed: 1000,
      width: window.innerWidth,
      on: {
        slideNextTransitionStart() {
          let pageName = pagesList[this.activeIndex];
          vm.$router.push({ name: "home", params: { page: pageName } });
        },

        slidePrevTransitionStart: function() {
          let pageName = pagesList[this.activeIndex];
          vm.$router.push({ name: "home", params: { page: pageName } });
        }
      }
    });
  },
  methods: {
    find(array, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return i;
      }
      return -1;
    }
  }
};
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.swiper-section {
  .swiper-section__wrapper {
    display: flex;
  }
}
</style>
