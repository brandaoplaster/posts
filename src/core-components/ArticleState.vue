<template>
  <div v-if="loading" class="flex justify-center items-center py-12">
    <div
      class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"
    ></div>
    <span class="ml-3 text-gray-600 dark:text-gray-400">
      {{ loadingText }}
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
      {{ backText }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "../composables/useI18n";

interface Props {
  loading: boolean;
  error: string | null;
}

defineProps<Props>();

const { locale } = useI18n();

const loadingText = computed(() =>
  locale.value === "pt" ? "Carregando artigo..." : "Loading article..."
);

const errorTitle = computed(() =>
  locale.value === "pt" ? "Erro ao carregar artigo" : "Error loading article"
);

const backText = computed(() =>
  locale.value === "pt" ? "Voltar para home" : "Back to home"
);
</script>
