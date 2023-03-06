<template>
  <svg class="w-5 h-5 mr-2" :class="svgClasses" v-html="svg" />
</template>

<script lang="ts" setup>
import {computed, h, ref} from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  svgClasses: {
    type: String,
    required: false,
    default: ""
  },
});

const modules = import.meta.glob('../../../public/assets/images/icons/**/*.svg', {
  as: 'raw',
  eager: true,
});
const svg = computed(() => {
  return modules['../../../public/assets/images/icons/' + props.name + '.svg'] ?? modules['../../../public/assets/images/icons/phone.svg'];
});
</script>