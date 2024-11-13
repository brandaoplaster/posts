<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Artigos</h1>
    <ul>
      <li v-for="article in articles" :key="article.id" class="mb-4 p-4 border rounded-lg">
        <h2 class="text-xl font-semibold">{{ article.title }}</h2>
        <p>{{ article.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Article } from '../types/article';

const articles = ref<Article[]>([]);

onMounted(async () => {
  try {
    const response = await fetch('data.json');
    articles.value = await response.json();
  } catch (error) {
    console.error("Erro ao carregar o JSON:", error);
  }
});
</script>
