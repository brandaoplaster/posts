<script lang="ts">
import { computed, ref } from "vue";
import { useArticleStore } from "../store/articles";
import { useRouter } from "vue-router";
import { mdiMagnify, mdiClose } from "@mdi/js";
import MdiIcon from "./MdiIcon.vue";

export default {
  name: "SearchButton",
  components: {
    MdiIcon,
  },
  setup() {
    const isSearchOpen = ref(false);
    const searchQuery = ref("");
    const searchInput = ref<HTMLInputElement | null>(null);

    const articleStore = useArticleStore();
    const router = useRouter();

    const handleSearch = () => {
      if (searchQuery.value.trim()) {
        toggleSearch();
      }
    };

    const selectArticle = (article: any) => {
      router.push({ name: "article", params: { id: article.id } });
      searchQuery.value = "";
      isSearchOpen.value = false;
    };

    const searchResults = computed(() => {
      if (!searchQuery.value.trim()) {
        return [];
      }

      const query = searchQuery.value.toLowerCase().trim();
      return articleStore.articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.categories.some((cat) =>
            cat.name.toLowerCase().includes(query)
          )
      );
    });

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSearch();
      } else if (event.key === "Escape") {
        toggleSearch();
      }
    };

    const toggleSearch = () => {
      isSearchOpen.value = !isSearchOpen.value;

      if (isSearchOpen.value) {
        setTimeout(() => {
          searchInput.value?.focus();
        }, 100);
      } else {
        searchQuery.value = "";
      }
    };

    return {
      isSearchOpen,
      searchQuery,
      searchInput,
      searchResults,
      handleSearch,
      handleKeydown,
      toggleSearch,
      selectArticle,
      router,
      mdiMagnify,
      mdiClose,
    };
  },
};
</script>

<template>
  <div class="relative flex items-center">
    <transition name="search">
      <div v-if="isSearchOpen" class="flex items-center">
        <input
          ref="searchInput"
          v-model="searchQuery"
          @keydown="handleKeydown"
          type="text"
          placeholder="Buscar posts..."
          class="w-64 px-3 py-2 text-sm border border-gray-300 rounded-md bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />

        <div
          v-if="searchQuery.trim() && searchResults.length > 0"
          class="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg max-h-64 overflow-y-auto z-50"
        >
          <div
            v-for="article in searchResults.slice(0, 5)"
            :key="article.id"
            @click="selectArticle(article)"
            class="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-200 dark:border-gray-600 last:border-b-0"
          >
            <div class="font-medium text-gray-900 dark:text-white text-sm">
              {{ article.title }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {{ article.categories.map((cat) => cat.name).join(", ") }}
            </div>
          </div>

          <div
            v-if="searchResults.length > 5"
            class="px-3 py-2 text-xs text-gray-500 dark:text-gray-400 text-center"
          >
            +{{ searchResults.length - 5 }} mais resultados
          </div>
        </div>

        <div
          v-else-if="searchQuery.trim() && searchResults.length === 0"
          class="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg p-3 z-50"
        >
          <div class="text-sm text-gray-500 dark:text-gray-400 text-center">
            Nenhum resultado encontrado
          </div>
        </div>
      </div>
    </transition>

    <button
      @click="toggleSearch"
      :aria-label="isSearchOpen ? 'Fechar busca' : 'Abrir busca'"
      class="ml-2"
    >
      <MdiIcon
        :icon="isSearchOpen ? mdiClose : mdiMagnify"
        size="24"
        class="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
      />
    </button>
  </div>
</template>

<style scoped>
.search-enter-active,
.search-leave-active {
  transition: all 0.3s ease;
}

.search-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.search-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
