import { defineStore } from 'pinia';
import { Article } from "../types/article";

export const useArticleStore = defineStore('article', {
  state: () => ({
    articles: [] as Article[],
  }),

  actions: {
    async loadArticles(): Promise<void> {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        this.articles = data.articles;
      } catch (error) {
        console.error('Error loading articles:', error);
      }
    },

    getPostById(id: number): Article | null {
      return this.articles.find(article => article.id === id) ?? null;
    },

    getArticlesByCategory(category: string): Article[] {
      return this.articles.filter(article => article.categories.some(cat => cat.name === category));
    },
  }
})
