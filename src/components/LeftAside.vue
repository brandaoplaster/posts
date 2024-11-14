<script lang="ts">
import { PropType } from 'vue';
import { Category } from '../types/category';
import BackButton from './BackButton.vue';


export default {
  components: { BackButton },
  name: "LeftAside",
  setup(props: { categories: Category[] }) {
    console.log("hi");
    return { ...props };
  },
  props: {
    categories: {
      type: Array as PropType<Category[]>,
      required: true
    }
  }
}
</script>

<template>
  <aside>
    <div
      class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
      <div class="py-4 xl:py-8">
        <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Tags
        </h2>
        <div class="flex flex-wrap">
          <div v-for="category in categories" :key="category.name" class="mr-3">
            <a href="#"
              class="text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
              {{ category.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
        <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Previus Article
        </h2>
        <div class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
          New features in v1
        </div>
      </div>
    </div>
    <div class="pt-4 xl:pt-8">
      <back-button />
    </div>
  </aside>
</template>
