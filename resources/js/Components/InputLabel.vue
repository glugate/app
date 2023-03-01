<template>
  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{value}}</label>
</template>
<script setup lang="ts">
import {defineProps} from "vue";

defineProps<{
  value: String
}>()
</script>