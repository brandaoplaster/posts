<script setup lang="ts">
import MainFooter from './components/MainFooter.vue';
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <section class="flex flex-col min-h-screen mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <MainHeader />
    <main class="flex-1 container mx-auto pt-24">
      <router-view />
    </main>

    <MainFooter />
  </section>
</template>
