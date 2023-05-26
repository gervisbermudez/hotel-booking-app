<script setup lang="ts">
import Header from './components/Header.vue';

</script>

<template>
  <div class="top-banner">
    <div class="banner-overlay"></div>
    <div class="banner-background"></div>
  </div>
  <Header />
</template>

<style lang="scss">
.top-banner {
  position: absolute;
  top: 0px;
  left: 0px;
  aspect-ratio: 2.241;
  width: 100%;
  z-index: 1;

  .banner-overlay {
    background: linear-gradient(180deg, #326d81 37.53%, rgba(43, 43, 43, 0) 115.47%);
    mix-blend-mode: color-burn;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 20;
  }

  .banner-background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: url('/img/banner-top.png');
    background-size: cover;
    z-index: 10;
  }
}
</style>
