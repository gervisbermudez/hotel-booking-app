<template>
    <div class="input-container">
        <input type="date" placeholder="" class="input-date" :id="id" :name="name" ref="dateInput" />
    </div>
</template>

<script lang="ts">
export default {
    props: ["id", "name"],
};
</script>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";

.input-container {
    position: relative;
}

input {
    padding: 2px 0px;
    padding-left: 30px;
    width: calc(100% - 30px);
    outline: none;
    border: 0;
    border-radius: 4px;
    height: 28px;
    color: $gray;

    &::-webkit-calendar-picker-indicator {
        position: absolute;
        left: 5px;
        cursor: pointer;
    }
}
</style>
