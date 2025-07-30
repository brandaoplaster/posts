import { ref, computed } from "vue";

type TranslationKeys = keyof typeof translations.pt;

const translations = {
  pt: {
    appTitle: "Meus Posts",
    tags: "Tags",
    about: "Sobre",
    search: "Pesquisar",

    home: "Início",
    posts: "Posts",
    categories: "Categorias",

    save: "Salvar",
    cancel: "Cancelar",
    edit: "Editar",
    delete: "Excluir",
    loading: "Carregando...",

    error: "Erro",
    success: "Sucesso",

    readMore: "Ler mais",
    publishedOn: "Publicado em",
    author: "Autor",
    category: "Categoria",
  },
  en: {
    appTitle: "My Posts",
    tags: "Tags",
    about: "About",
    search: "Search",

    home: "Home",
    posts: "Posts",
    categories: "Categories",

    save: "Save",
    cancel: "Cancel",
    edit: "Edit",
    delete: "Delete",
    loading: "Loading...",

    error: "Error",
    success: "Success",

    readMore: "Read more",
    publishedOn: "Published on",
    author: "Author",
    category: "Category",
  },
};

const currentLanguage = ref<"pt" | "en">("pt");

export function useI18n() {
  const t = (key: TranslationKeys): string => {
    return translations[currentLanguage.value][key] || key;
  };

  const setLanguage = (language: "pt" | "en") => {
    currentLanguage.value = language;
    localStorage.setItem("userLanguage", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en-US";
  };

  const locale = computed(() => currentLanguage.value);

  const initLanguage = () => {
    const savedLanguage = localStorage.getItem("userLanguage") as
      | "pt"
      | "en"
      | null;
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  };

  return {
    t,
    locale,
    setLanguage,
    initLanguage,
  };
}
