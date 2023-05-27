import { defineStore } from "pinia";
import { Hotel } from "../models/Hotels";
import { getHotels } from "../services";

export interface State {
  hotels: Hotel[];
  hotel: Hotel | null;
  loading: boolean;
}

export interface TotalCost {
  hotel: Hotel;
  totalCost: number;
}

export const useHotelsStore = defineStore("store", {
  state: (): State => {
    return {
      hotels: [],
      hotel: null,
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
    ) {
      this.loading = true;
      try {
        const response = await getHotels();
        let hotels = response;
        let resultByHotels: TotalCost[] = [];
        hotels.forEach((hotel: Hotel) => {
          let totalCost = 0;
          const currentDate = new Date(startDate);
          while (currentDate <= endDate) {
            const isWeekend =
              currentDate.getDay() === 0 || currentDate.getDay() === 6; // 0: Domingo, 6: Sábado
            const rate = isWeekend
              ? hotel.weekendRates[userType]
              : hotel.weekdayRates[userType];
            totalCost += rate;
            currentDate.setDate(currentDate.getDate() + 1); // Avanzar al siguiente día
          }
          resultByHotels.push({
            hotel,
            totalCost,
          });
        });
        return resultByHotels.sort((a, b) => {
          return b.totalCost - a.totalCost;
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
