<template>
  <section class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div v-if="loading" class="flex justify-center items-center py-12">
      <div
        class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"
      ></div>
      <span class="ml-3 text-gray-600 dark:text-gray-400">
        {{ loadingMessage }}
      </span>
    </div>

    <div v-else-if="error" class="text-center py-12">
      <div class="text-red-600 dark:text-red-400 mb-4">
        <h2 class="text-xl font-semibold mb-2">{{ errorTitle }}</h2>
        <p>{{ error }}</p>
      </div>
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
      >
        {{ backToHomeText }}
      </router-link>
    </div>

    <article
      v-else-if="article"
      class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"
    >
      <div class="space-y-1 text-center">
        <header class="pt-6 xl:pb-6">
          <div class="flex items-center justify-center gap-2 mb-2">
            <span
              class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
            >
              {{ article?.publishedAt ? formatDate(article.publishedAt) : "" }}
            </span>
            <span
              v-if="article.language"
              class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
            >
              {{ article.language.toUpperCase() }}
            </span>
          </div>
          <h1
            class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
          >
            {{ article?.title }}
          </h1>
        </header>
      </div>

      <div
        class="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
      >
        <LeftAside :categories="computedCategories" />
        <div
          v-html="content"
          class="mt-6 prose dark:prose-dark divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"
        ></div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { marked } from "marked";
import { useArticleStore } from "../store/articles";
import { Article } from "../types/article";
import LeftAside from "../components/LeftAside.vue";
import { useDateFormatter } from "../composables/useDateFormatter";
import { useI18n } from "../composables/useI18n";

const content = ref<string>("");
const article = ref<Article | null>(null);
const error = ref<string | null>(null);
const loading = ref<boolean>(false);

const route = useRoute();
const articleStore = useArticleStore();
const { formatDate } = useDateFormatter();
const { locale } = useI18n();

const computedCategories = computed(() => article.value?.categories ?? []);

const loadingMessage = computed(() =>
  locale.value === "pt" ? "Carregando artigo..." : "Loading article..."
);

const errorTitle = computed(() =>
  locale.value === "pt" ? "Erro ao carregar artigo" : "Error loading article"
);

const backToHomeText = computed(() =>
  locale.value === "pt" ? "Voltar para home" : "Back to home"
);

const articleNotFoundError = computed(() =>
  locale.value === "pt" ? "Artigo não encontrado." : "Article not found."
);

async function fetchArticleById(articleId: number): Promise<Article> {
  if (
    !articleStore.articles.length ||
    !articleStore.articles.some(
      (a) => a.language === articleStore.currentLanguage
    )
  ) {
    await articleStore.loadArticles("published");
  }

  const foundArticle = articleStore.getPostById(articleId);

  if (!foundArticle) {
    throw new Error(articleNotFoundError.value);
  }

  return foundArticle;
}

async function fetchMarkdown(path: string): Promise<string> {
  try {
    // O path já vem completo do JSON: "/posts/content/post_1.md"
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(
        `Erro ao carregar Markdown: ${response.status} - ${response.statusText}`
      );
    }

    const text = await response.text();

    // Verificar se realmente recebeu Markdown e não HTML
    if (text.includes("<!DOCTYPE html>") || text.includes("<html")) {
      throw new Error(
        "Arquivo não encontrado - recebeu HTML em vez de Markdown"
      );
    }

    console.log("✅ Markdown carregado:", path);
    return marked(text);
  } catch (err) {
    console.error("❌ Erro ao carregar markdown:", path, err);
    throw new Error(
      locale.value === "pt"
        ? "Não foi possível carregar o conteúdo do artigo."
        : "Failed to load article content."
    );
  }
}

async function initializePage(articleId?: string | number): Promise<void> {
  loading.value = true;
  error.value = null;

  try {
    const id = articleId || route.params.id;
    const parsedId = Number(id);

    if (isNaN(parsedId)) {
      throw new Error(
        locale.value === "pt" ? "ID de artigo inválido." : "Invalid article ID."
      );
    }

    article.value = await fetchArticleById(parsedId);
    content.value = await fetchMarkdown(article.value.path);
    console.log();
  } catch (err) {
    console.error("Erro ao carregar artigo:", err);
    error.value = err instanceof Error ? err.message : "Erro desconhecido";
    article.value = null;
    content.value = "";
  } finally {
    loading.value = false;
  }
}

watch(
  () => articleStore.currentLanguage,
  async (newLanguage, oldLanguage) => {
    if (newLanguage !== oldLanguage && article.value) {
      console.log(`Idioma mudou para ${newLanguage}, recarregando artigo...`);
      await initializePage();
    }
  }
);

onMounted(async () => {
  articleStore.initLanguage();
  await initializePage();
});

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    const idParam = Array.isArray(to.params.id)
      ? to.params.id[0]
      : to.params.id;
    await initializePage(idParam);
  }
});
</script>
