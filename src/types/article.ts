import { Category } from "./category";

export interface Article {
  id: number;
  title: string;
  summary: string;
  path: string;
  publishedAt: string;
  categories: Category[];
}
