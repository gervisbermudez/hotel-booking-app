<template>
    <div class="card-container">
        <div class="header-info">
            <div class="flex space-between items-center">
                <a href="#!"><span class="card-title">{{ name }}</span></a>
                <div class="flex space-between card-rating">
                    <span>{{ rating }}</span>
                    <div class="star"></div>
                </div>
            </div>
        </div>
        <div class="card-header">
            <div class="header-overlay"></div>
            <div class="header-bg" :style="`background-image: url(${photos[0]})`"></div>
        </div>
        <div class="card-content">
            <div class="card-description">
                <slot name="content" />
            </div>
            <div class="card-footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: ["name", "rating", "photos"]
};
</script>

<style lang="scss">
@import "../assets/styles/vars.scss";

.card-container {
    box-shadow: 3px 4px 8px 5px rgba(188, 188, 188, 0.16);
    border-radius: 12px;
    background: $white;
    width: 100%;
    max-width: 324px;
    min-height: fit-content;
    overflow: hidden;
    position: relative;

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
            opacity: 0.5;
        }

        .header-bg {
            min-height: 223px;
            background-size: cover;
        }

    }

    .header-info {
        position: absolute;
        top: 12rem;
        left: 1rem;
        z-index: 2;
        width: calc(100% - 2rem);

        a {
            text-decoration: none;
        }

        .card-title {
            font-size: 1.3rem;
            color: $white;
        }

        .card-rating {
            gap: 0.5rem;
            color: $white;
        }

        .star {
            background-image: url("/img/icons/star.svg");
            width: 18px;
            height: 18px;
        }
    }

    .card-content {
        color: $black;
        padding: 20px;

        .card-description {

            .description {
                font-weight: 300;
                font-size: 0.9rem;
                min-height: 2.5rem;
            }

            .price {
                font-weight: 600;
                margin-top: 1rem;
                color: $black;
            }

            .rates-title {
                margin: 10px 0;
                font-size: 1rem;
                font-weight: 400;

            }

            .rates {
                font-size: 0.9rem;
                font-weight: 300;
            }
        }
    }

    .card-footer {
        min-height: 60px;
        display: flex;
        align-items: end;
    }
}
</style>
