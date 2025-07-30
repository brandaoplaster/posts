import { defineStore } from "pinia";
import { Article, ArticleStatus } from "../types/article";

export const useArticleStore = defineStore("article", {
  state: () => ({
    articles: [] as Article[],
    currentLanguage: "en",
    isLoading: false,
    error: null as string | null,
  }),

  getters: {
    articleByLanguage: (state) => {
      return state.articles.filter(
        (article) =>
          article.language === state.currentLanguage || !article.language
      );
    },

    getArticlesByCategory: (state) => {
      return (category: string): Article[] => {
        return state.articles.filter(
          (article) =>
            (article.language === state.currentLanguage || !article.language) &&
            article.categories.some((cat) => cat.name === category)
        );
      };
    },

    getArticleById: (state) => {
      return (id: number): Article | null => {
        return (
          state.articles.find(
            (article) =>
              article.id === id &&
              (article.language === state.currentLanguage || !article.language)
          ) ?? null
        );
      };
    },
  },

  actions: {
    setLanguage(language: string): void {
      this.currentLanguage = language;
      localStorage.setItem("language", language);
    },

    initLanguage(): void {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt")) {
        this.currentLanguage = savedLanguage;
      }
    },

    async switchLanguage(newLanguage: "pt" | "en", status: ArticleStatus) {
      this.setLanguage(newLanguage);
      const hasArticlesInNewLanguage = this.articles.some(
        (article) => article.language === newLanguage
      );

      if (!hasArticlesInNewLanguage) {
        await this.loadArticlesByLanguage(status, newLanguage);
      }
    },

    async loadArticlesByLanguage(
      status: ArticleStatus,
      language: "pt" | "en"
    ): Promise<void> {
      this.isLoading = true;
      this.error = null;

      try {
        const fileName = language === "pt" ? "data-pt.json" : "data-en.json";
        const response = await fetch(`/posts/${fileName}`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        const languageArticles = data.articles.map((article: Article) => ({
          ...article,
          language,
        }));

        this.articles = [
          ...this.articles.filter((article) => article.language !== language),
          ...languageArticles.filter(
            (article: Article) => article.status === status
          ),
        ];
      } catch (error) {
        console.error("Error loading articles:", error);
        this.error = "Failed to load articles";
      } finally {
        this.isLoading = false;
      }
    },

    async loadArticles(status: ArticleStatus): Promise<void> {
      try {
        const response = await fetch("/posts/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        this.articles = data.articles.filter(
          (article: Article) => article.status === status
        );
      } catch (error) {
        console.error("Error loading articles:", error);
      }
    },

    getPostById(id: number): Article | null {
      return this.articles.find((article) => article.id === id) ?? null;
    },

    getArticlesByCategory(category: string): Article[] {
      return this.articles.filter((article) =>
        article.categories.some((cat) => cat.name === category)
      );
    },
  },
});
