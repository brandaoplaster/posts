<template>
  <button
    @click="toggleLanguage"
    class="group flex items-center gap-1.5 px-2.5 py-1.5 h-9 min-w-[36px] sm:min-w-[60px] bg-white dark:bg-gray-900 dark:border-gray-600 rounded-md cursor-pointer transition-colors duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium focus:outline-none"
    :title="
      currentLanguage === 'pt' ? 'Alterar para Inglês' : 'Change to Portuguese'
    "
  >
    <span class="text-sm leading-none">{{
      currentLanguage === "pt" ? "🇧🇷" : "🇺🇸"
    }}</span>
    <span
      class="hidden sm:inline-block text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-150"
    >
      {{ currentLanguage === "pt" ? "PT" : "EN" }}
    </span>
  </button>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  name: "LanguageToggleButton",
  props: {
    initialLanguage: {
      type: String as () => "pt" | "en",
      default: "pt",
    },
  },
  emits: ["languageChanged"],
  setup(props: any, { emit }: any) {
    const currentLanguage = ref<"pt" | "en">(props.initialLanguage);

    const toggleLanguage = () => {
      currentLanguage.value = currentLanguage.value === "pt" ? "en" : "pt";

      emit("languageChanged", currentLanguage.value);

      localStorage.setItem("userLanguage", currentLanguage.value);

      document.documentElement.lang =
        currentLanguage.value === "pt" ? "pt-BR" : "en-US";
    };

    const initLanguage = () => {
      const savedLanguage = localStorage.getItem("userLanguage") as
        | "pt"
        | "en"
        | null;
      if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
        currentLanguage.value = savedLanguage;
        document.documentElement.lang =
          savedLanguage === "pt" ? "pt-BR" : "en-US";
        emit("languageChanged", savedLanguage);
      }
    };

    onMounted(() => {
      initLanguage();
    });

    return {
      currentLanguage,
      toggleLanguage,
    };
  },
};
</script>
