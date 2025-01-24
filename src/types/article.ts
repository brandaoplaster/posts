import { Category } from "./category";

export type ArticleStatus = 'draft' | 'published' | 'archived';

export interface Article {
  id: number;
  title: string;
  summary: string;
  path: string;
  publishedAt: string;
  categories: Category[];
  status: ArticleStatus;
}
