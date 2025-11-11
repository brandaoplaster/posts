import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useArticleStore } from "../store/articles";
import { Article } from "../types/article";
import { useI18n } from "./useI18n";
import { Category } from "../types/category";

export function useArticle() {
  const article = ref<Article | null>(null);
  const error = ref<string | null>(null);
  const loading = ref<boolean>(false);

  const route = useRoute();
  const articleStore = useArticleStore();
  const { locale } = useI18n();

  const categories = computed<Category[]>(
    () => article.value?.categories ?? []
  );

  const errorNotFound = computed(() =>
    locale.value === "pt" ? "Artigo não encontrado." : "Article not found."
  );

  const errorInvalidId = computed(() =>
    locale.value === "pt" ? "ID de artigo inválido." : "Invalid article ID."
  );

  async function fetchById(articleId: number): Promise<Article> {
    if (
      !articleStore.articles.length ||
      !articleStore.articles.some(
        (article) => article.language === articleStore.currentLanguage
      )
    ) {
      await articleStore.loadArticles("published");
    }

    const found = articleStore.getPostById(articleId);

    if (!found) {
      throw new Error(errorNotFound.value);
    }

    return found;
  }

  async function loadArticle(articleId?: string | number): Promise<void> {
    loading.value = true;
    error.value = null;

    try {
      const id = articleId || route.params.id;
      const parsed = Number(id);

      if (isNaN(parsed)) {
        throw new Error(errorInvalidId.value);
      }

      article.value = await fetchById(parsed);
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Unknown error";
      article.value = null;
    } finally {
      loading.value = false;
    }
  }

  function reset(): void {
    article.value = null;
    error.value = null;
    loading.value = false;
  }

  return {
    article,
    error,
    loading,
    categories,
    loadArticle,
    reset,
  };
}
