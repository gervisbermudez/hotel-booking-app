<template>
    <div class="spinner">
        <div class="spinner-inner"></div>
    </div>
</template>

<style lang="scss">
@import "../assets/styles/vars.scss";

.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.spinner-inner {
    width: 40px;
    height: 40px;
    border: 4px solid $white;
    border-top-color: $primary;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
  