<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Article } from '../types/article';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import LeftAside from "../components/LeftAside.vue";

const article = ref<Article | null>(null);
const articles = ref<Article[]>([]);
const route = useRoute();
const content = ref('');
const computedCategories = computed(() => article.value?.categories ?? []);

onMounted(async () => {
  const articleId = Number(route.params.id);

  try {
    const response = await fetch("/posts/data.json");
    articles.value = await response.json();

    article.value = articles.value.find((item: Article) => item.id === articleId) || null;

    if (article.value) {
      const markdownResponse = await fetch(article.value.path);
      if (!markdownResponse.ok) throw new Error(`Erro ao carregar Markdown: ${markdownResponse.statusText}`);

      const markdownText = await markdownResponse.text();

      content.value = await marked(markdownText);
    }

  } catch (error) {
    console.log("Error", error);
  }
})
</script>

<template>
  <section class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <article class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header class="pt-6 xl:pb-6">
        <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {{ article?.title }}
        </h1>
      </header>
      <div class="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
        <LeftAside :categories="computedCategories" />
        <div v-html="content" class="prose divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">

        </div>
      </div>
    </article>
  </section>
</template>
