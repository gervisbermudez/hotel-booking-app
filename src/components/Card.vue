<template>
    <div class="card-container">
        <div class="card-header">
            <div class="header-overlay"></div>
            <div class="header-bg" style="background-image: url('/img/hotels/1/image5.png');"></div>
        </div>
        <div class="card-content">
            <div class="flex space-between items-center">
                <a href="#!"><span class="card-title">Hotel Name</span></a>
                <div class="flex space-between card-rating">
                    <span>4.8</span>
                    <div class="star"></div>
                </div>
            </div>
            <div class="card-description">
                <div class="description">
                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                </div>
                <div class="price">
                    $ 328.85
                </div>
            </div>
            <div class="card-footer">
                <Button class="secondary">Reservar</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
</script>

<style scoped lang="scss">
@import "../assets/styles/vars.scss";

.card-container {
    box-shadow: 3px 4px 8px 5px rgba(188, 188, 188, 0.16);
    border-radius: 12px;
    background: $white;
    width: 100%;
    max-width: 324px;
    min-height: 445px;
    overflow: hidden;

    .card-header {
        position: relative;


        .header-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #2B2B2B;
            mix-blend-mode: multiply;
            opacity: 0.25;
        }

        .header-bg {
            min-height: 223px;
            background-size: cover;
        }
    }

    .card-content {
        color: $black;
        padding: 20px;

        a {
            text-decoration: none;
        }

        .card-title {
            font-size: 1.3rem;
            color: $black;
        }

        .card-rating {
            gap: 1rem;
        }

        .star {
            background-image: url("/img/icons/star.svg");
            width: 18px;
            height: 18px;
        }

        .card-description {
            margin-top: 1rem;

            .description {
                font-weight: 300;
                font-size: 0.9rem;
            }

            .price {
                font-weight: 600;
                margin-top: 1rem;
                color: darken($gray, 20);
            }
        }
    }

    .card-footer {
        min-height: 90px;
        display: flex;
        align-items: end;
    }
}
</style>
