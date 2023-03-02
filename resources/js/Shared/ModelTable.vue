<template>
  <div class="bg-white rounded-md shadow overflow-x-auto">
    <table class="w-full whitespace-nowrap">
      <thead>
      <tr class="text-left font-bold">
        <th class="pb-4 pt-6 px-6">Name</th>
        <th class="pb-4 pt-6 px-6">City</th>
        <th class="pb-4 pt-6 px-6" colspan="2">Phone</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list.data" :key="item.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
        <td class="border-t">
          <Link class="flex items-center px-6 py-4 focus:text-primary-500" :href="`/${resourceSlug}/${item.id}`">
            {{ item.name }}
            <icon v-if="item.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400" />
          </Link>
        </td>
        <td class="border-t">
          <Link class="flex items-center px-6 py-4" :href="`/${resourceSlug}/${item.id}`" tabindex="-1">
            {{ item.city }}
          </Link>
        </td>
        <td class="border-t">
          <Link class="flex items-center px-6 py-4" :href="`/${resourceSlug}/${item.id}`" tabindex="-1">
            {{ item.phone }}
          </Link>
        </td>
        <td class="w-px border-t">
          <Link class="flex items-center px-4" :href="`/${resourceSlug}/${item.id}`" tabindex="-1">
            <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
          </Link>
        </td>
      </tr>
      <tr v-if="list.data.length === 0">
        <td class="px-6 py-4 border-t" colspan="4">No items found.</td>
      </tr>
      </tbody>
    </table>
  </div>
  <pagination class="mt-6" :links="list.links" />
</template>
<script setup>
import { Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import Pagination from '@/Shared/Pagination.vue'
defineProps({
  list: Object,
  resourceSlug: String
})
</script>