<template>
    <div class="input-container">
        <input v-model="value" type="date" class="input-date" :id="id" :name="name" ref="inputDate" />
    </div>
</template>

<script lang="ts">
import {
    getFormatDate,
    getParseStringDate
} from "../utils/index"

export default {
    props: ["id", "name", 'inputValue'],
    emits: ['update:value'],
    computed: {
        value: {
            get() {
                return getFormatDate(this.inputValue)
            },
            set(value: any) {
                this.$emit('update:value', this.name, getParseStringDate(value))
            }
        }
    },

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
