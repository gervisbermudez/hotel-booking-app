<template>
  <div class="top-banner">
    <div class="banner-overlay"></div>
    <div class="banner-background"></div>
  </div>
  <div class="app-content">
    <Header />
    <div class="form">
      <div class="form-container flex space-between">
        <div class="form-control">
          <label for="user-type">User type</label>
          <Select id="type-user" name="type-user" :user-type="userType" @update:value="handleSelectChange" />
        </div>
        <div class="form-control">
          <label for="initial_date">Inicial date</label>
          <input-date id="initial_date" name="initial_date" :input-value="dates.initial_date"
            @update:value="handleInputChange" />
        </div>
        <div class="form-control">
          <label for="final_date">Final date</label>
          <input-date id="final_date" name="final_date" :input-value="dates.final_date"
            @update:value="handleInputChange" />
        </div>
        <div class="form-control">
          <div>&nbsp;</div>
          <Button @click="handleSearchBooking" class="primary">Search</Button>
        </div>
      </div>
    </div>
    <div class="results">
      <h1 class="title" v-if="searchResult == null">Our Hotels</h1>
      <h1 class="title" v-else>Best Result</h1>
      <Spinner v-if="loading" />
      <div v-else>
        <div class="cards flex space-between" v-if="searchResult == null">
          <Card v-for="(hotel, index) in  hotelsList" :key="index" :name="hotel.name" :rating="hotel.rating"
            :photos="hotel.photos">
            <template #content>
              <div class="description">
                {{ hotel.location }}
              </div>
              <div class="rates">
                <div class="rates-title">Rates for regular customer</div>
                <div>Weekdays: <span class="price">$ {{ hotel.weekdayRates.regular }}</span>
                  <div>Weekends: <span class="price">$ {{ hotel.weekendRates.regular }}</span>
                  </div>
                </div>
              </div>
              <br />
              <div class="rates">
                <div class="rates-title">Rates for rewards customer</div>
                <div>Weekdays: <span class="price">$ {{ hotel.weekdayRates.rewards }}</span>
                  <div>Weekends: <span class="price">$ {{ hotel.weekendRates.rewards }}</span>
                  </div>
                </div>
              </div>
            </template>
            <template #footer>
              <Button class="primary">Details</Button>
            </template>
          </Card>
        </div>
        <div v-else>
          <Card :name="searchResult.hotel.name" :rating="searchResult.hotel.rating" :photos="searchResult.hotel.photos">
            <template #content>
              <div class="description">
                {{ searchResult.hotel.location }}
              </div>
              <div class="rates-title">
                {{ searchResult.countWeekDays }} days and {{ searchResult.countWeekends }} weekend days
              </div>
              <div class="price">
                $ {{ searchResult.totalCost }}
              </div>
            </template>
            <template #footer>
              <Button class="secondary">Book</Button>
            </template>
          </Card>
          <div class="view-list">
            <a href="#!" @click="resetSearch">View All Hotels</a>
          </div>
        </div>
      </div>
    </div>
    <section class="container">
      <div class="gallery">
        <h2>Gallery</h2>
        <div class="large flex">
          <div class="large-image">
            <div class="image-title">
              Lakewood
            </div>
            <div class="image-overlay"></div>
            <div class="image" style="background-image: url('/img/hotels/1/imagen1.png')"></div>
          </div>
          <div class="large-image">
            <div class="image-title">
              Bridgewood
            </div>
            <div class="image-overlay"></div>
            <div class="image" style="background-image: url('/img/hotels/2/imagen1.png')"></div>
          </div>
        </div>
        <div class="small flex">
          <div class="small-image">
            <div class="image-title">
              Ridgewood
            </div>
            <div class="image-overlay"></div>
            <div class="image" style="background-image: url('/img/hotels/3/imagen1.png')"></div>
          </div>
          <div class="small-image">
            <div class="image-title">
              Lakewood
            </div>
            <div class="image-overlay"></div>
            <div class="image" style="background-image: url('/img/hotels/1/imagen2.png')"></div>
          </div>
          <div class="small-image">
            <div class="image-title">
              Bridgewood
            </div>
            <div class="image-overlay"></div>
            <div class="image" style="background-image: url('/img/hotels/2/imagen2.png')"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="reviews">
        <h2>Reviews</h2>
        <div class="review-list">
          <div class="review-item" v-for="(item) in reviews" :key="item.id">
            <div class="review-container">
              <div class="review-header">
                <img :src="`/img/users/avatar${item.id}.png`" />
                <div>
                  <div class="review-username">{{ item.user }}</div>
                  <div>{{ item.hotel_name }}</div>
                </div>
                <div>
                  <div class="review-date">{{ getTimeAgo(item.date) }}</div>
                  <div class="flex gap-1">
                    <div class="flex">
                      <div v-for="n in item.rating" :key="n" class="star"></div>
                    </div>
                    {{ item.rating }}
                  </div>
                </div>
              </div>
              <div class="review-comment">
                {{ item.comment }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <footer>
    <div class="container flex space-between items-center">
      <div><img :src="logo" /></div>
      <div class="copyright">Copyright © 1996–2023 Hotel Booking ™. Todos los derechos reservados.</div>
      <div class="flex gap-2">
        <div class="links">
          <a href="#!">Contact Us</a>
          <a href="#!">Destination</a>
          <a href="#!">Article</a>
        </div>
        <div class="links">
          <a href=" #!">Lakewood</a>
          <a href="#!">Bridgewood</a>
          <a href="#!">Ridgewood</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useHotelsStore } from "./stores/hotels.store";

import Button from './components/Button.vue';
import Header from './components/Header.vue';
import InputDate from "./components/InputDate.vue";
import Select from "./components/Select.vue";
import Card from './components/Card.vue';
import Spinner from "./components/Spinner.vue";
import { TotalCost } from './models/Hotels';
import { getHotels, getReviews } from './services';
import { Hotel } from './models/Hotels';
import { Review } from "./models/Review";
import { getTimeAgo } from './utils/index';
import logo from "./assets/images/brand-logo.svg";

interface Dates {
  initial_date: Date | null;
  final_date: Date | null;
  [key: string]: any
}

const store = useHotelsStore();
const { loading } = storeToRefs(store);
const userType = ref<"regular" | "rewards">("regular");

const hotelsList = ref<Hotel[] | []>([]);

const reviews = ref<Review[]>([]);

const searchResult = ref<TotalCost | null>(null);

const dates: Dates = reactive({
  initial_date: null,
  final_date: null
})

onMounted(() => {
  getHotels().then((result) => {
    hotelsList.value = result;
  });

  getReviews().then((result) => {
    reviews.value = result.splice(0, 6);
  });

})

const handleSelectChange = (data: string) => {
  userType.value = data as "regular" | "rewards"
}

const handleInputChange = (name: string, data: string) => {
  dates[name] = data;
}

const handleSearchBooking = () => {
  dates.initial_date
    && dates.final_date
    && store.calculateTotalCost(userType.value, dates.initial_date, dates.final_date).then((result) => {
      if (result) {
        searchResult.value = result[0];
      }
    })
}

const resetSearch = () => {
  searchResult.value = null
}

</script>

<style lang="scss">
@import "./assets/styles/vars.scss";

.top-banner {
  position: absolute;
  top: 0px;
  left: 0px;
  aspect-ratio: 2.241;
  width: 100%;
  z-index: 1;

  .banner-overlay {
    background: linear-gradient(180deg, #326d81 37.53%, rgba(43, 43, 43, 0) 115.47%);
    mix-blend-mode: color-burn;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 20;
  }

  .banner-background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: url('/img/banner-top.png');
    background-size: cover;
    z-index: 10;
  }
}

.app-content {
  z-index: 2;
  position: relative;

  .form {
    padding: 20px;
    background-color: rgba(217, 217, 217, 0.72);
    border-radius: 12px;
    width: 100%;
    max-width: $breakpoint-md;
    margin: 130px auto 0;
    gap: 1rem;

    .form-container {
      gap: 1rem;
    }
  }

  .form-control {
    display: flex;
    flex-direction: column;
    min-height: 60px;
    justify-content: space-between;
    width: 100%;
  }

  .results {
    max-width: 1066px;
    margin: 80px auto 0;

    .title {
      color: $white;
    }

    .cards {
      margin-top: 60px;
    }
  }

  .view-list {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: $primary;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .gallery {
    display: flex;
    flex-direction: column;
    max-width: 1066px;
    margin: auto;
    width: 100%;
    gap: 1.5rem;

    .image-title {
      position: absolute;
      z-index: 3;
      top: 1rem;
      left: 1rem;
      color: $white;
      font-size: 1.5rem;
      font-family: "Lato", sans-serif;
    }

    .large,
    .small {
      display: flex;
      gap: 1.5rem;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2B2B2B;
      mix-blend-mode: multiply;
      opacity: 0.5;
      z-index: 2;
    }

    .image {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
    }

    .large-image {
      position: relative;
      width: 523px;
      height: 220px;
      box-shadow: 3px 3px 9px 3px rgb(156 156 156 / 60%);
      border-radius: 12px;
      overflow: hidden;
    }

    .small-image {
      position: relative;
      width: 342px;
      height: 190px;
      box-shadow: 3px 3px 9px 3px rgb(156 156 156 / 60%);
      border-radius: 12px;
      overflow: hidden;
    }
  }

  .reviews {
    h2 {
      margin: 3rem 0;
    }

    max-width: 1066px;
    margin: auto;

    .review-list {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .review-item {
      width: 40%;

      .review-container {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        max-width: 300px;
      }

      .review-comment {
        color: $gray;
      }

      .review-header {
        display: flex;
        position: relative;
        padding-left: 70px;
        justify-content: space-between;
        align-items: center;
        min-height: 60px;


        &>div {
          height: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }

        img {
          position: absolute;
          left: 0;
          top: 0;
        }

        .review-username {
          font-weight: 600;
        }

        .review-date {
          text-align: right;
        }
      }
    }
  }
}

footer {
  margin-top: 3rem;
  height: 120px;
  background: $primary;

  .container {
    height: 100%;
    color: $white;
  }

  .copyright {
    font-size: 0.8rem;
    font-weight: 300;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      color: $white;
      text-decoration: none;
    }
  }
}
</style>
