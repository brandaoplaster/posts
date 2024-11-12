<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArticlePage",
  setup() {},
});
</script>

<template>
  <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
    <header class="pt-6 xl:pb-6">
      <div class="space-y-1 text-center">
        <dl class="space-y-10">
          <div>
            <dt class="sr-only">Published on</dt>
            <dd
              class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
            >
              <time datetime="2023-08-05T00:00:00.000Z"
                >Saturday, August 5, 2023</time
              >
            </dd>
          </div>
        </dl>
        <div>
          <h1
            class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
          >
            Release of Tailwind Nextjs Starter Blog v2.0
          </h1>
        </div>
      </div>
    </header>
    <div
      class="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
    >
      <dl
        class="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700"
      >
        <dt class="sr-only">Authors</dt>
        <dd>
          <ul
            class="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8"
          >
            <li class="flex items-center space-x-2">
              <dl class="whitespace-nowrap text-sm font-medium leading-5">
                <dt class="sr-only">Name</dt>
                <dd class="text-gray-900 dark:text-gray-100">Tails Azimuth</dd>
                <dt class="sr-only">Twitter</dt>
                <dd>
                  <a
                    class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/Twitter"
                    >@Twitter</a
                  >
                </dd>
              </dl>
            </li>
          </ul>
        </dd>
      </dl>
      <div
        class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0"
      >
        <div class="prose max-w-none pb-8 pt-10 dark:prose-invert">
          <h2 class="content-header" id="introduction">
            <a
              class="break-words"
              href="#introduction"
              aria-hidden="true"
              tabindex="-1"
            >
              <span class="content-header-link">
                <svg
                  class="h-5 linkicon w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"
                  ></path>
                  <path
                    d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"
                  ></path>
                </svg>
              </span>
            </a>
            Introduction
          </h2>
        </div>

      </div>
      <footer>
        <div
          class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"
        >
          <div class="py-4 xl:py-8">
            <h2
              class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
            >
              Tags
            </h2>
            <div class="flex flex-wrap">
              <a
                class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href="/tags/next-js"
                >next-js</a
              ><a
                class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href="/tags/tailwind"
                >tailwind</a
              ><a
                class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href="/tags/guide"
                >guide</a
              ><a
                class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href="/tags/feature"
                >feature</a
              >
            </div>
          </div>
          <div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
            <div>
              <h2
                class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400"
              >
                Previous Article
              </h2>
              <div
                class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <a class="break-words" href="/blog/new-features-in-v1"
                  >New features in v1</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="pt-4 xl:pt-8">
          <a
            class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Back to the blog"
            href="/blog"
            >← Back to the blog</a
          >
        </div>
      </footer>
    </div>
  </div>
</template>
