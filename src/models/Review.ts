export interface Review {
  id: number;
  rating: number;
  comment: string;
  user: string;
  date: string;
  hotel_id: number;
  hotel_name: string | undefined;
}
