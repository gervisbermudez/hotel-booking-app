<template>
    <button>
        <slot />
    </button>
</template>
<script lang="ts">

export default {
    props: {
        type: {
            default: "primary",
            validator(value: string) {
                return ['primary', 'secundary'].includes(value);
            }
        }
    },
    created() {
        // props are exposed on `this`
        console.log(this.type)

    }
}


</script>
<style lang="scss" scoped>
@import "../assets/styles/vars.scss";

button {
    height: 32px;
    padding: 0 1.5rem;
    border-radius: 4px;
    outline: none;
    background-color: $primary;
    color: $white;
    border: 1px solid $primary;
    cursor: pointer;
    // Transición para el hover
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: $white;
        color: $primary;
    }
}
</style>