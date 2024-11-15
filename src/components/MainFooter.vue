<script lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/20/solid";

export default {
  name: "MainFooter",
  components: {
    EnvelopeIcon
  },
  setup() {
    const currentYear = new Date().getFullYear();
    return { currentYear };
  },
}
</script>

<template>
    <footer class="mt-16 flex flex-col items-center">
    <div class="mb-3 flex space-x-4">
      <a href="#" class="text-sm text-gray-500 transition hover:text-gray-600">
        <EnvelopeIcon class="w-6 h-6 text-yellow-500" />
      </a>
    </div>
    <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
      Posts © {{ currentYear }}
    </div>
  </footer>
</template>
