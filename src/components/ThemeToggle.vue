<script lang="ts">
import { MoonIcon, SunIcon } from "@heroicons/vue/20/solid";
import { ref, onMounted } from "vue";

export default {
  name: "ThemeToggle",
  components: {
    SunIcon,
    MoonIcon,
  },
  setup() {
    const isDark = ref(false);

    const toggleTheme = () => {
      isDark.value = !isDark.value;
      document.documentElement.classList.toggle("dark", isDark.value);
      localStorage.setItem("theme", isDark.value ? "dark" : "light");
    };

    onMounted(() => {
      isDark.value = localStorage.getItem("theme") === "dark";
      document.documentElement.classList.toggle("dark", isDark.value);
    });

    return { isDark, toggleTheme };
  },
};
</script>

<template>
  <button
    @click="toggleTheme"
    aria-label="Toggle Theme"
    class="p-2 rounded focus:outline-none"
  >
    <span v-if="isDark">
      <SunIcon class="w-6 h-6 text-yellow-500" />
    </span>
    <span v-else>
      <MoonIcon class="w-6 h-6 text-gray-800" />
    </span>
  </button>
</template>

<style scoped>
button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
