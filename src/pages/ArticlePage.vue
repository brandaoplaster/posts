<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Article } from '../types/article';
import { useRoute } from 'vue-router';
import { marked } from 'marked';


const article = ref<Article | null>(null);
const articles = ref<Article[]>([]);
const route = useRoute();
const content = ref('');

onMounted(async () => {
  const articleId = Number(route.params.id);
  console.log(articleId)

  try {
    const response = await fetch("/posts/data.json");
    console.log(response)
    articles.value = await response.json();

    console.log("article take")
    console.log(articles.value)

    article.value = articles.value.find((item: Article) => item.id === articleId) || null;

    if (article.value) {
      const markdownResponse = await fetch(article.value.path);
      if (!markdownResponse.ok) throw new Error(`Erro ao carregar Markdown: ${markdownResponse.statusText}`);

      const markdownText = await markdownResponse.text();

      content.value = await marked(markdownText);
    }

    console.log("article load",article.value)
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
        <div v-html="content" class="prose divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">

        </div>
        <footer>
          <div class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
            <div class="py-4 xl:py-8">
              <h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tags
              </h2>
              <div class="flex flex-wrap">
                <div v-for="category in article?.categories" :key="category.name" class="mr-3">
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
            <a href="#" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
              ← Back to the blog
            </a>
          </div>
        </footer>
      </div>
    </article>
  </section>
</template>
