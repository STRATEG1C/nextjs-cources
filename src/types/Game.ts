export interface Game {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  genre: string;
  platform: string;
  releaseDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
