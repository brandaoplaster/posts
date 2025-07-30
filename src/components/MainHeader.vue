<script lang="ts">
import { mdiBalloon } from "@mdi/js";
import ThemeToggle from "./ThemeToggle.vue";
import MdiIcon from "./MdiIcon.vue";
import { onMounted, ref, watchEffect } from "vue";
import SearchButton from "./SearchButton.vue";
import { useI18n } from "../composables/useI18n";
import { useArticleStore } from "../store/articles";
import LanguageToggleButton from "./LanguageToggleButton.vue";

export default {
  name: "MainHeader",
  components: {
    ThemeToggle,
    MdiIcon,
    SearchButton,
    LanguageToggleButton,
  },
  setup() {
    const iconColor = ref("black");
    const { t, locale, setLanguage, initLanguage } = useI18n();
    const articleStore = useArticleStore();

    const updateIconColor = () => {
      iconColor.value = document.documentElement.classList.contains("dark")
        ? "white"
        : "black";
    };

    const handleLanguageChange = async (newLanguage: "pt" | "en") => {
      setLanguage(newLanguage);
      articleStore.setLanguage(newLanguage);
      await articleStore.switchLanguage(newLanguage);

      console.log(`Idioma alterado para: ${newLanguage}`);
    };

    onMounted(() => {
      updateIconColor();
      initLanguage();
      articleStore.initLanguage();
      watchEffect(updateIconColor);
    });

    return {
      mdiBalloon,
      iconColor,
      t,
      locale,
      handleLanguageChange,
    };
  },
};
</script>

<template>
  <header
    class="fixed top-0 left-0 h-20 w-full z-50 bg-white dark:bg-gray-950 border-b dark:border-gray-700 flex items-center justify-between py-4 px-8 shadow-md"
  >
    <router-link :to="'/'" class="break-words" aria-label="logo">
      <div class="flex items-center justify-between">
        <div class="mr-3 text-text-dark">
          <MdiIcon :icon="mdiBalloon" size="32" color="iconColor" />
        </div>
        <div class="hidden h-6 text-2xl text-text-dark font-semibold sm:block">
          My Posts
        </div>
      </div>
    </router-link>
    <div class="flex items-center space-x-4 leading-5 sm:space-x-6">
      <div
        class="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96"
      >
        <router-link
          :to="{ name: 'category', params: { categoryName: 'posts' } }"
          class="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        >
          Tags
        </router-link>
        <router-link
          :to="{ name: 'about' }"
          class="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        >
          About
        </router-link>
      </div>
      <SearchButton />
      <LanguageToggleButton
        :initial-language="locale"
        @language-changed="handleLanguageChange"
      />

      <ThemeToggle />
    </div>
  </header>
</template>
