<template>
    <header>
        <div class="container flex space-between items-center">
            <div class="brand">
                <img :src="logo" />
            </div>
            <div class="links flex space-between items-center">
                <nav class="flex space-between items-center">
                    <a href="/">Home</a>
                    <a href="#!">Destination</a>
                    <a href="#!">Articles</a>
                    <a href="#!">Contact Us</a>
                </nav>
                <Button>Login</Button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import logo from "../assets/images/brand-logo.svg";
import Button from "./Button.vue";
</script>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";

header {
    height: 60px;
    position: relative;
    z-index: 2;

    .links {
        gap: 3rem;

        nav {
            width: 100%;
            gap: 1rem;

            a {
                color: $white;
                text-decoration: none;
            }
        }
    }
}
</style>
