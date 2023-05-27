<template>
    <div class="select-container">
        <div class="icon"></div>
        <select :name="name" :id="id">
            <option value="regular">Regular</option>
            <option value="reward">Reward</option>
        </select>
    </div>
</template>

<script lang="ts">
export default {
    props: ["id", "name"],
};
</script>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";

.select-container {
    position: relative;

    .icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url('/img/icons/loyalty.svg');
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 7px;
        left: 7px;
        z-index: 1;
    }
}

select {
    width: 100%;
    padding: 2px 0px;
    padding-left: 30px;
    outline: none;
    border: 0;
    border-radius: 4px;
    height: 32px;
    color: $gray;
}
</style>
