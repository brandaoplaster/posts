<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const isDark = ref(false);

    const toggleTheme = () => {
      isDark.value = !isDark.value;
      document.documentElement.classList.toggle('dark', isDark.value);
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    };

    onMounted(() => {
      isDark.value = localStorage.getItem('theme') === 'dark';
      document.documentElement.classList.toggle('dark', isDark.value);
    });

    return { isDark, toggleTheme };
  },
};
</script>

<template>
  <button @click="toggleTheme">
    {{ isDark ? 'Tema Claro' : 'Tema Escuro' }}
  </button>
</template>

<style scoped>
button {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
