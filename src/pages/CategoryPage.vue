<script setup lang="ts">
import { useArticleStore } from "../store/articles";
import RightAside from "../components/RightAside.vue";
import { useRoute } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";
import { Article } from "../types/article";

const articleStore = useArticleStore();
const route = useRoute();
const categoryName = computed(() => route.params.categoryName as string);

const articles = ref<Article[]>([]);
const isLoading = ref(false);
const errorMessage = ref<string | null>(null);

const loadArticles = async () => {
  isLoading.value = true;
  errorMessage.value = null;
  try {
    if (articleStore.articles.length === 0) {
      await articleStore.loadArticles("published");
    }
    articles.value = articleStore.getArticlesByCategory(categoryName.value);
  } catch (error) {
    errorMessage.value = 'Erro ao carregar posts';
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadArticles();
});

watch(
  () => route.params.categoryName,
  () => {
    loadArticles();
  }
)
</script>

<template>
  <div class="flex sm:space-x-24">
    <RightAside />
    <div class="divide-y divide-gray-200 dark:divide-gray-700 pt-6">
      <h1 class="text-2xl font-bold mb-4">Lista de Artigos</h1>
      <div v-if="isLoading" class="loading">Carregando...</div>

      <div v-else-if="error" class="error">{{ error }}</div>

      <div v-else-if="!isLoading && articles.length === 0" class="no-posts">
        Nenhum post encontrado para a categoria "{{ categoryName }}".
      </div>
      <ul class="divide-y divide-gray-200 dark:divide-gray-700">
        <li v-for="article in articles" :key="article.title" class="py-12">
          <article>
            <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">

              <div class="space-y-5 xl:col-span-3">
                <div class="space-y-6">
                  <div>
                    <h2 class="text-2xl font-bold leading-8 tracking-tight">
                      <router-link :to="{ name: 'article', params: { id: article.id } }"
                        class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                        {{ article.title }}
                      </router-link>
                    </h2>
                    <div class="flex flex-wrap">
                      <div v-for="category in article.categories" :key="category.name" class="mr-3">
                        <router-link :to="{ name: 'category', params: { categoryName: category.name } }"
                          class="text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          {{ category.name }}
                        </router-link>
                      </div>
                    </div>
                  </div>
                  <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                    {{ article.summary }}
                  </div>
                </div>
                <div class="text-base font-medium leading-6">
                  <router-link :to="{ name: 'article', params: { id: article.id } }"
                    class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    Read more →
                  </router-link>
                </div>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>
