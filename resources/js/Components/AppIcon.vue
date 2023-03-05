<template>
  <svg class="w-5 h-5 mr-2 text-gray-400" v-html="svg" />
</template>

<script lang="ts" setup>
import {computed, h} from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    default: '',
  },
});

const IconA = () => {
  return svg
}

const file = props.name;
const modules = import.meta.glob('../../../public/assets/images/icons/**/*.svg', {
  as: 'raw',
  eager: true,
});
const svg = computed(() => {
  return modules['../../../public/assets/images/icons/' + file + '.svg'] ?? modules['../../../public/assets/images/icons/phone.svg'];
});
</script>