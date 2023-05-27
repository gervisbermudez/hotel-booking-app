<template>
    <button>
        <slot />
    </button>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import "../assets/styles/vars.scss";

button {
    height: 32px;
    padding: 0 1.5rem;
    border-radius: 4px;
    outline: none;
    background-color: $white;
    color: $black;
    border: 1px solid $white;
    cursor: pointer;
    // Transición para el hover
    transition: background-color 0.4s, color 0.4s border-color 0.4s;

    &:hover {
        background-color: darken($white, 20%);
        border-color: darken($white, 20%);
    }

    &.primary {
        background-color: $primary;
        color: $white;
        border-color: $primary;

        &:hover {
            background-color: lighten($primary, 10%);
            border-color: lighten($primary, 10%);
        }

    }

    &.secondary {
        background-color: $secondary;
        color: $white;
        border-color: $secondary;

        &:hover {
            background-color: lighten($secondary, 20%);
            border-color: lighten($secondary, 20%);
        }

    }
}
</style>