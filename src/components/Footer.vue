<template>
  <footer>
    <div class="container flex space-between items-center">
      <div><img :src="logo" /></div>
      <div class="copyright">Copyright © 1996–2023 Hotel Booking ™. Todos los derechos reservados.</div>
      <div class="flex gap-2">
        <div class="links">
          <a href="#!">Contact Us</a>
          <a href="#!">Destination</a>
          <a href="#!">Article</a>
        </div>
        <div class="links">
          <a href=" #!">Lakewood</a>
          <a href="#!">Bridgewood</a>
          <a href="#!">Ridgewood</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logo from "../assets/images/brand-logo.svg";
</script>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";

footer {
  margin-top: 3rem;
  height: 120px;
  background: $primary;

  .container {
    height: 100%;
    color: $white;
  }

  .copyright {
    font-size: 0.8rem;
    font-weight: 300;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      color: $white;
      text-decoration: none;
    }
  }
}
</style>
