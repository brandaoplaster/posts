<script lang="ts">
import { ref, onMounted } from "vue";
import MdiIcon from "./MdiIcon.vue";
import { mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';

export default {
  name: "ThemeToggle",
  components: {
   MdiIcon
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

    return { isDark, toggleTheme, mdiWeatherSunny, mdiWeatherNight };
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
      <MdiIcon :icon="mdiWeatherSunny" size="32" color="yellow" />
    </span>
    <span v-else>
      <MdiIcon :icon="mdiWeatherNight" size="32" color="black" />
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
