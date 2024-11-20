<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'MdiIcon',
  props: {
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    size: {
      type: [Number, String] as PropType<number | string>,
      default: 24,
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
    className: {
      type: String,
      default: '',
    },
  },
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    :class="className"
  >
    <path :d="icon" />
  </svg>
</template>
