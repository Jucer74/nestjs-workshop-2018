export interface IBook extends Document {
  createdAt: Date;
  name: string;
  genre: string;
  stock: number;
  author: string;
}
