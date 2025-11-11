import { ref } from "vue";
import { marked } from "marked";
import { useI18n } from "./useI18n";

export function useMarkdown() {
  const content = ref<string>("");
  const { locale } = useI18n();

  const errorMessage = () =>
    locale.value === "pt"
      ? "Não foi possível carregar o conteúdo do artigo."
      : "Failed to load article content.";

  async function fetchMarkdown(path: string): Promise<string> {
    try {
      const response = await window.fetch(path);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();

      if (text.includes("<!DOCTYPE html>") || text.includes("<html")) {
        throw new Error("Received HTML instead of Markdown");
      }

      return marked(text);
    } catch (err) {
      console.error("Error loading markdown:", path, err);
      throw new Error(errorMessage());
    }
  }

  async function loadArticleContent(path: string): Promise<void> {
    content.value = await fetchMarkdown(path);
  }

  function clearContent(): void {
    content.value = "";
  }

  return {
    content,
    loadArticleContent,
    clearContent,
  };
}
