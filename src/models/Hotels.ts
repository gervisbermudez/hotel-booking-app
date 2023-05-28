import { Review } from "./Review";

export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  weekdayRates: {
    regular: number;
    rewards: number;
  };
  weekendRates: {
    regular: number;
    rewards: number;
  };
  photos: string[];
}

export interface TotalCost {
  hotel: Hotel;
  totalCost: number;
  countWeekends: number;
  countWeekDays: number;
}
