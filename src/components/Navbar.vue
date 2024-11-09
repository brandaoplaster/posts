<script lang="ts">
  import ThemeToggle from './ThemeToggle.vue';

  export default {
  name: "NavBar",
  components: {
    ThemeToggle
  }
  }
</script>

<template>
  <nav class="w-full h-16 bg-background text-text shadow-md flex items-center justify-between px-8 fixed top-0">
    <!-- Logo -->
    <div class="text-primary font-bold text-xl">
      MinhaApp
    </div>

    <!-- Links de Navegação -->
    <ul class="flex space-x-4">
      <li><a href="#" class="text-text hover:text-primary">Home</a></li>
      <li><a href="#" class="text-text hover:text-primary">Sobre</a></li>
      <li><a href="#" class="text-text hover:text-primary">Contato</a></li>
    </ul>

    <!-- Botão de Alternância de Tema -->
    <ThemeToggle />
  </nav>
</template>
