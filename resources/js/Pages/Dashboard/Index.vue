<template>
  <div>
    <Head title="Dashboard" />
    <h1 class="mb-8 text-3xl font-bold">Dashboard</h1>
    <p class="mb-8 leading-normal">Hey there! Welcome to UNO!</p>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import Layout from '@/Layouts/Layout.vue'

export default {
  components: {
    Head,
  },
  layout: Layout,
}
</script>
