<template>
  <aside class="w-56 h-full shadow-lg" aria-label="Sidenav">
    <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <ul class="space-y-2">
        <menu-item v-for="item in menu.items" :item="item" :menu="menu" />
      </ul>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
import {IMenu} from "@/types";
import MenuItem from "@/Components/AppMenu/MenuItem.vue";
import {computed} from "vue";

const { url } = usePage();

const props = defineProps<{
  menu: IMenu,
  isMobile?: boolean,
}>()

const menu = computed(() => {
  let m = props.menu
  m.isMobile = props.isMobile
  return m

})

</script>