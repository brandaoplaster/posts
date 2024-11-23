import { defineStore } from 'pinia';
import { Category } from '../types/category';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [] as Category[],
  }),

  actions: {
    async loadCategories(): Promise<void> {
      try {
        const response = await fetch('/posts/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        this.categories = data.categories;
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    },
  }
})
