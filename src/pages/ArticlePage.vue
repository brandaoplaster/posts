<template>
  <section class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <ArticleState :loading="loading" :error="error" />

    <ArticleContent
      v-if="article && !loading && !error"
      :article="article"
      :content="content"
      :categories="categories"
    />
  </section>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { useArticleStore } from "../store/articles";
import { useArticle } from "../composables/useArticle";
import { useMarkdown } from "../composables/useMarkdown";
import ArticleState from "../core-components/ArticleState.vue";
import ArticleContent from "../core-components/ArticleContent.vue";

const articleStore = useArticleStore();
const { article, error, loading, categories, loadArticle, reset } =
  useArticle();
const { content, loadArticleContent, clearContent } = useMarkdown();

async function init(articleId?: string): Promise<void> {
  reset();
  clearContent();

  await loadArticle(articleId);

  if (article.value) {
    await loadArticleContent(article.value.path);
  }
}

watch(
  () => articleStore.currentLanguage,
  async (newLang, oldLang) => {
    if (newLang !== oldLang && article.value) {
      await init();
    }
  }
);

onMounted(async () => {
  articleStore.initLanguage();
  await init();
});

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    const id = Array.isArray(to.params.id) ? to.params.id[0] : to.params.id;
    await init(id);
  }
});
</script>
