import { Category } from "./category";

export interface Article {
  title: string;
  summary: string;
  path: string;
  publishedAt: string;
  categories: Category[];
}
