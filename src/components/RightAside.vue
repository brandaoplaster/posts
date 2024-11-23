<script lang="ts">
import { computed, onMounted } from 'vue';
import { useCategoryStore } from '../store/category';


export default {
  name: "rightAside",
  setup() {

    const categoryStore = useCategoryStore();

    onMounted(async () => {
      await categoryStore.loadCategories();
    });

    const categories = computed(() => categoryStore.categories);

    console.log(categories);
    console.log("categories");


    return { categories };
  },
};
</script>


<template>
  <aside class="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
    <div class="px-6 py-4">
      <h3 class="font-bold uppercase text-primary-500">
        All Posts
      </h3>
      <ul>
        <li v-for="category in categories" :key="category.name" class="my-3">
          <a href="" class="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500">
            {{ category.name }}
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
