<script lang="ts">
export default {
  name: "BackButton",
  setup() {},
};
</script>

<template>
  <router-link :to="{ name: 'home' }"
    class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
  >
    ← Back List
  </router-link>
</template>
