<template>
    <div class="input-container">
        <input v-model="value" type="date" class="input-date" :id="id" :name="name" ref="inputDate" />
    </div>
</template>

<script lang="ts">
export default {
    props: ["id", "name", 'inputValue'],
    emits: ['update:value'],
    computed: {
        value: {
            get() {
                return this.getFormatDate(this.inputValue)
            },
            set(value: any) {
                this.$emit('update:value', this.name, this.getParseStringDate(value))
            }
        }
    },
    methods: {
        getFormatDate: (date: Date | null): string => {
            if (!date) return "";
            const mes = date.getMonth() + 1;
            const dia = date.getDate();
            const anio = date.getFullYear();
            return `${anio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
        },
        getParseStringDate: (dateString: string) => {
            const parts = dateString.split("-");
            const year = parseInt(parts[0]);
            const month = parseInt(parts[1]) - 1; // Restamos 1 ya que los meses en JavaScript comienzan desde 0
            const day = parseInt(parts[2]);
            return new Date(year, month, day);

        }
    }
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
