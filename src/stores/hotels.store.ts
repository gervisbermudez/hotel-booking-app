import { defineStore } from "pinia";
import { Hotel, TotalCost } from "../models/Hotels";
import { getHotels, getReviews } from "../services";
import { Review } from "../models/Review";

export interface State {
  hotels: Hotel[];
  hotel: Hotel | null;
  reviews: Review[];
  loading: boolean;
}

export const useHotelsStore = defineStore("store", {
  state: (): State => {
    return {
      hotels: [],
      hotel: null,
      reviews: [],
      loading: false,
    };
  },
  actions: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await getHotels();
        this.hotels = response;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
    async calculateTotalCost(
      userType: "regular" | "rewards",
      startDate: Date,
      endDate: Date
    ): Promise<TotalCost[] | undefined> {
      this.loading = true;
      try {
        const response = await getHotels();
        let hotels = response;
        let resultByHotels: TotalCost[] = [];
        hotels.forEach((hotel: Hotel) => {
          let totalCost = 0;
          let countWeekends = 0;
          let countWeekDays = 0;
          const currentDate = new Date(startDate);
          while (currentDate <= endDate) {
            const isWeekend =
              currentDate.getDay() === 0 || currentDate.getDay() === 6; // 0: Domingo, 6: Sábado
            const rate = isWeekend
              ? hotel.weekendRates[userType]
              : hotel.weekdayRates[userType];
            totalCost += rate;
            currentDate.setDate(currentDate.getDate() + 1); // Avanzar al siguiente día
            isWeekend ? countWeekends++ : countWeekDays++;
          }
          resultByHotels.push({
            hotel,
            totalCost,
            countWeekends,
            countWeekDays,
          });
        });
        return resultByHotels.sort((a, b) => {
          if (a.totalCost === b.totalCost) {
            return b.hotel.rating - a.hotel.rating;
          }
          return a.totalCost - b.totalCost;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
    async fetchReviews() {
      this.loading = true;
      try {
        const response = await getReviews();
        this.reviews = response;
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
    async fetchReviewsByHotelID(hotel_id: number) {
      this.loading = true;
      try {
        const response = await getReviews();
        this.reviews = response.filter(
          (review) => review.hotel_id === hotel_id
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
