<template>
  <template v-if="href.length">
    <Link
      as="button"
      :href="href"
      class="flex text-gray-900 bg-white font-medium rounded-lg border-gray-300 border text-sm px-5 py-2.5 text-center hover:bg-gray-100"
      >
      <div v-if="loading" class="btn-spinner mr-2 mt-0.5" />
      <slot/>
    </Link>
  </template>
  <template v-else>
    <button
      :href="href"
      :type="type"
      class="flex text-gray-900 bg-white shadow font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-gray-100"
      >
      <div v-if="loading" class="btn-spinner mr-2 mt-0.5" />
      <slot/>
    </button>
  </template>
</template>
<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

export interface Props {
  href?: string,
  loading?: boolean,
  type?: 'submit' | 'reset' | 'button'
}


const props = withDefaults(defineProps<Props>(), {
  href: '',
  loading: false,
  type: 'button'
})
</script>