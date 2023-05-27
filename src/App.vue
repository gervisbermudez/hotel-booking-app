<script setup lang="ts">
import Button from './components/Button.vue';
import Header from './components/Header.vue';
import InputDate from "./components/InputDate.vue";
import Select from "./components/Select.vue";
import Card from './components/Card.vue';
</script>

<template>
  <div class="top-banner">
    <div class="banner-overlay"></div>
    <div class="banner-background"></div>
  </div>
  <div class="app-content">
    <Header />
    <div class="form">
      <div class="form-container flex space-between">
        <div class="form-control">
          <label for="user-type">Tipo de Usuario</label>
          <Select id="type-user" name="type-user" />
        </div>
        <div class="form-control">
          <label for="initial_date">Fecha Inicio</label>
          <input-date id="initial_date" name="initial_date" />
        </div>
        <div class="form-control">
          <label for="final_date">Fecha Inicio</label>
          <input-date id="final_date" name="final_date" />
        </div>
        <div class="form-control">
          <div>&nbsp;</div>
          <Button class="primary">Buscar</Button>
        </div>
      </div>
    </div>
    <div class="results">
      <h1 class="title">Top Results</h1>
      <div class="cards flex space-between">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/vars.scss";

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

.app-content {
  z-index: 2;
  position: relative;
  padding-bottom: 2rem;

  .form {
    padding: 20px;
    background-color: rgba(217, 217, 217, 0.72);
    border-radius: 12px;
    width: 100%;
    max-width: $breakpoint-md;
    margin: 130px auto 0;
    gap: 1rem;

    .form-container {
      gap: 1rem;
    }
  }

  .form-control {
    display: flex;
    flex-direction: column;
    min-height: 60px;
    justify-content: space-between;
    width: 100%;
  }

  .results {
    max-width: 1066px;
    margin: 80px auto 0;

    .title {
      color: $white;
    }
  }

}
</style>
