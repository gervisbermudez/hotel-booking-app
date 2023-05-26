<template>
    <button>
        <slot />
    </button>
</template>
<script lang="ts">
export default {

}
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
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: darken($white, 20%);
        border-color: darken($white, 20%);
    }

    &.primary {
        background-color: $primary;
        color: $black;
        border-color: $primary;

        &:hover {
            background-color: darken($primary, 20%);
            border-color: darken($primary, 20%);
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