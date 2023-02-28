<template>
  <Link class="btn-main block" :href="href">
    <span>
      <slot/>
    </span>
  </Link>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
const props = defineProps<{
  href: String
}>()
</script>




