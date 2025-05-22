<script lang="ts">
import MdiIcon from "./MdiIcon.vue";
import { mdiLinkedin, mdiGithub, mdiEmail } from "@mdi/js";

export default {
  name: "MainFooter",
  components: {
    MdiIcon,
  },
  setup() {
    const currentYear = new Date().getFullYear();
    return { currentYear, mdiLinkedin, mdiGithub, mdiEmail };
  },
};
</script>

<template>
  <footer class="mt-16 flex flex-col items-center">
    <div class="mb-3 flex space-x-4">
      <a
        href="https://www.linkedin.com/in/brandaoplaster/"
        class="text-sm text-gray-500 transition hover:text-gray-600"
      >
        <MdiIcon :icon="mdiLinkedin" />
      </a>
      <a
        href="https://github.com/brandaoplaster"
        class="text-sm text-gray-500 transition hover:text-gray-600"
      >
        <MdiIcon :icon="mdiGithub" />
      </a>
      <a href="#" class="text-sm text-gray-500 transition hover:text-gray-600">
        <MdiIcon :icon="mdiEmail" />
      </a>
    </div>
    <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
      Posts © {{ currentYear }}
    </div>
  </footer>
</template>
