<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Artigos</h1>
    <ul>
      <li v-for="article in articles" :key="article.id" class="mb-4 p-4 border rounded-lg">
        <h2 class="text-xl font-semibold">{{ article.title }}</h2>
        <p>{{ article.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const articles = ref([
  { id: 1, title: "Artigo 1", content: "Este é o conteúdo do Artigo 1." },
  { id: 2, title: "Artigo 2", content: "Este é o conteúdo do Artigo 2." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
  { id: 3, title: "Artigo 3", content: "Este é o conteúdo do Artigo 3." },
]);
</script>
