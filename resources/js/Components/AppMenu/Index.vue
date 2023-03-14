<template>
  <aside class="w-56 h-full" aria-label="Sidenav">
    <div class="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <ul class="space-y-2">
        <template v-for="item in menu.items">
          <menu-item :item="item" :level="0" @select="onSelect" :selected-items="selectedItems" />
        </template>
      </ul>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
import {AppMenuItem, IMenu} from "@/types";
import MenuItem from "@/Components/AppMenu/MenuItem.vue";
import useMenu from "@/Components/AppMenu/useMenu";

const { url } = usePage();

const props = defineProps<{
  menu: IMenu,
}>()

const { setSelected, selectedItems } = useMenu()

const onSelect = (item: AppMenuItem) => {
  console.log("Menu onSelect", item.name)
  if(!item.children?.length){
    setSelected(item.parentIds ? [item.id, ...item.parentIds] : [item.id])
  }

}

</script>