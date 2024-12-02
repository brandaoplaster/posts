<script lang="ts">
import { mdiBalloon } from "@mdi/js";
import ThemeToggle from "./ThemeToggle.vue";
import MdiIcon from "./MdiIcon.vue";
import { onMounted, ref, watchEffect } from "vue";

export default {
  name: "MainHeader",
  components: {
    ThemeToggle,
    MdiIcon,
  },
  setup() {
    const iconColor = ref("black");

    const updateIconColor = () => {
      iconColor.value = document.documentElement.classList.contains("dark")
        ? "white"
        : "black";
    };

    onMounted(() => {
      updateIconColor();
      watchEffect(updateIconColor);
    });

    return { mdiBalloon, iconColor };
  },
};
</script>

<template>
  <header
    class="fixed top-0 left-0 h-20 w-full z-50 bg-white dark:bg-gray-950 border-b dark:border-gray-700 flex items-center justify-between py-4 px-8 shadow-md">
    <a class="break-words" aria-label="logo" href="/">
      <div class="flex items-center justify-between">
        <div class="mr-3 text-text-dark">
          <MdiIcon :icon="mdiBalloon" size="32" color="iconColor" />
        </div>
        <div class="hidden h-6 text-2xl text-text-dark font-semibold sm:block">
          My Posts
        </div>
      </div>
    </a>
    <div class="flex items-center space-x-4 leading-5 sm:space-x-6">
      <div
        class="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
        <a class="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
          href="/blog">
          Blog
        </a><a
          class="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
          href="/tags">
          Tags
        </a>
        <a class="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
          href="/about">
          About
        </a>
      </div>
      <button aria-label="Search">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="h-6 w-6 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
        </svg>
      </button>

      <ThemeToggle />
    </div>
  </header>
</template>
