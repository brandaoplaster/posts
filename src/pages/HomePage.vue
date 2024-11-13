<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700 pt-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Artigos</h1>
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      <li v-for="article in articles" :key="article.title" class="py-12">
        <article>
          <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
            <div class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              {{ article.publishedAt }}
            </div>
            <div class="space-y-5 xl:col-span-3">
              <div class="space-y-6">
                <div>
                  <h2 class="text-2xl font-bold leading-8 tracking-tight">
                    <router-link :to="{ name: 'article', params: { title: article.title } }" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                      {{ article.title }}
                    </router-link>
                  </h2>
                  <div class="flex flex-wrap">
                    <div v-for="category in article.categories" :key="category.name" class="mr-3">
                      <a href="#"
                        class="text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        {{ category.name }}
                      </a>
                    </div>
                  </div>
                </div>
                <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                  {{ article.summary }}
                </div>
              </div>
              <div class="text-base font-medium leading-6">
                <router-link :to="{ name: 'article', params: { title: article.title } }" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                  Read more →
                </router-link>
              </div>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Article } from "../types/article";

const articles = ref<Article[]>([]);

onMounted(async () => {
  try {
    const response = await fetch("data.json");
    articles.value = await response.json();
  } catch (error) {
    console.error("Erro ao carregar o JSON:", error);
  }
});
</script>
