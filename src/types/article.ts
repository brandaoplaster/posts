import { Category } from "./category";

export interface Article {
  title: string;
  path: string;
  publishedAt: string;
  categories: Category[];
}
