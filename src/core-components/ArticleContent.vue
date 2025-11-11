<template>
  <article class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
    <div class="space-y-1 text-center">
      <header class="pt-6 xl:pb-6">
        <div class="flex items-center justify-center gap-2 mb-2">
          <span
            class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
          >
            {{ article?.publishedAt ? formatDate(article.publishedAt) : "" }}
          </span>
        </div>
      </header>
    </div>

    <div
      class="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
    >
      <LeftAside :categories="categories" />
      <div
        v-html="content"
        class="mt-6 prose dark:prose-dark divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"
      ></div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Article } from "../types/article";
import { useDateFormatter } from "../composables/useDateFormatter";
import LeftAside from "../components/LeftAside.vue";
import { Category } from "../types/category";

interface Props {
  article: Article;
  content: string;
  categories: Category[];
}

defineProps<Props>();

const { formatDate } = useDateFormatter();
</script>
