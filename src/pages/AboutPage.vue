<script setup lang="ts"></script>

<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="space-y-2 pb-8 pt-6 md:space-y-5">
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        About
      </h2>
    </div>
    <div
      class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0"
    >
      <div class="flex flex-col items-center space-x-2 pt-8">
        <img
          src="https://avatars.githubusercontent.com/u/26599685?v=4"
          alt=""
          class="h-48 w-48 rounded-full"
        />
        <h3 class="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
          BrandaoPlaster
        </h3>
        <span class="text-gray-500 dark:text-gray-400">
          Software Engineer
        </span>
        <div class="flex space-x-3 pt-6">
          <span class="text-sm text-gray-500 transition hover:text-gray-600">
            Email
          </span>
          <a
            href="https://github.com/BrandaoPlaster"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-gray-500 transition hover:text-gray-600"
            aria-label="Github"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/brandaoplaster/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-gray-500 transition hover:text-gray-600"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div class="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
        <p>
          Desenvolvedor de software há quase uma década, já rodei por diferentes
          tecnologias, projetos e contextos. Hoje meu foco está em Ruby on
          Rails, Elixir e Vue.js, mas mais do que empilhar ferramentas, meu
          interesse sempre foi entender como a tecnologia resolve problemas de
          verdade — sem glamour, sem mágica.
        </p>
        <p>
          Fora da tecnologia, passei 3 anos viajando como nômade pelo Brasil,
          buscando experiências fora da rotina e conhecendo diferentes
          realidades. Vivi em cidades que muitas pessoas nem sabem que existem,
          conheci pessoas incríveis e aprendi que estar em movimento muda tudo —
          na vida e no trabalho.
        </p>
        <p>
          No meio das minhas viagens, comecei a tirar fotos de paisagens e
          encontrei um hobby. Estudei fotografia para aprender mais e isso
          acabou se tornando um passatempo que cultivo até hoje.
        </p>
      </div>
    </div>
  </div>
</template>
