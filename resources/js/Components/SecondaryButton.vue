<template>
  <template v-if="href.length">
    <Link
      as="button"
      :href="href"
      class="flex text-white bg-secondary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
      >
      <div v-if="loading" class="btn-spinner mr-2 mt-0.5" />
      <slot/>[LINK] {{href}}
    </Link>
  </template>
  <template v-else>
    <button
      :href="href"
      :type="type"
      class="flex text-white bg-secondary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700"
      >
      <div v-if="loading" class="btn-spinner mr-2 mt-0.5" />
      <slot/>[Button]
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