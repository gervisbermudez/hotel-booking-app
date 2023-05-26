import { Review } from "./Review";

export interface Hotel {
  id: number;
  name: string;
  rating: number;
  weekdayRates: {
    regular: number;
    rewards: number;
  };
  weekendRates: {
    regular: number;
    rewards: number;
  };
}
