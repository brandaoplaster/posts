import { defineStore } from "pinia";
import { Article, ArticleStatus } from "../types/article";

export const useArticleStore = defineStore("article", {
  state: () => ({
    allArticles: [] as Article[],
    currentLanguage: "pt" as "pt" | "en",
    isLoading: false,
    error: null as string | null,
  }),

  getters: {
    articles: (state) => {
      return state.allArticles.filter(
        (article) => article.language === state.currentLanguage
      );
    },

    articlesByLanguage: (state) => {
      return state.allArticles.filter(
        (article) => article.language === state.currentLanguage
      );
    },

    getPostById: (state) => {
      return (id: number): Article | null => {
        return (
          state.allArticles.find(
            (article) =>
              article.id === id && article.language === state.currentLanguage
          ) ?? null
        );
      };
    },

    getArticlesByCategory: (state) => {
      return (category: string): Article[] => {
        return state.allArticles.filter(
          (article) =>
            article.language === state.currentLanguage &&
            article.categories.some((cat) => cat.name === category)
        );
      };
    },
  },

  actions: {
    setLanguage(language: "pt" | "en") {
      this.currentLanguage = language;
      localStorage.setItem("articleLanguage", language);
    },

    initLanguage() {
      const savedLanguage = localStorage.getItem("articleLanguage") as
        | "pt"
        | "en"
        | null;
      if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
        this.currentLanguage = savedLanguage;
      }
    },

    async loadArticles(status: ArticleStatus): Promise<void> {
      if (this.allArticles.length > 0) return;

      this.isLoading = true;
      this.error = null;

      try {
        const [ptResponse, enResponse] = await Promise.all([
          fetch("/posts/data-pt.json"),
          fetch("/posts/data-en.json"),
        ]);

        let allArticles: Article[] = [];

        if (ptResponse.ok) {
          const ptData = await ptResponse.json();
          const ptArticles = ptData.articles.map((article: Article) => ({
            ...article,
            language: "pt" as const,
          }));
          allArticles = [...allArticles, ...ptArticles];
        }

        if (enResponse.ok) {
          const enData = await enResponse.json();
          const enArticles = enData.articles.map((article: Article) => ({
            ...article,
            language: "en" as const,
          }));
          allArticles = [...allArticles, ...enArticles];
        }

        this.allArticles = allArticles.filter(
          (article: Article) => article.status === status
        );
      } catch (error) {
        console.error("Error loading articles:", error);
        this.error = "Erro ao carregar artigos";
        this.allArticles = [];
      } finally {
        this.isLoading = false;
      }
    },

    switchLanguage(newLanguage: "pt" | "en") {
      this.setLanguage(newLanguage);
    },
  },
});
