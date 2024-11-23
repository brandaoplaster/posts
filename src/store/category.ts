import { defineStore } from 'pinia';
import { Category } from '../types/category';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [] as Category[],
  }),
})
