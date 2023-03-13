<template>
  <li>
    <button @click="onClick" type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group focus:bg-primary-100 hover:bg-primary-100" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
      <app-icon :name="item.icon" class="w-5 h-5 mr-2 text-gray-600" />
      <template v-if="hasChildren">
        <div class="flex-1 ml-2 text-left whitespace-nowrap">{{item.label}}</div>
      </template>
      <template v-else>
        <Link @click="onClick" :href="`/${item.fullSlug}`" class="flex-1 ml-2  text-left whitespace-nowrap">{{item.label}}</Link>
      </template>
      <app-icon v-if="hasChildren" :name="!isExpanded ? 'ChevronRight' : 'ChevronDown'" class="w-5 h-5" />
    </button>
    <ul v-if="hasChildren" v-show="isExpanded" id="dropdown-pages" class="py-2 space-y-2">
      <sub-menu-item v-for="child in item.children" :item="child" />
    </ul>
  </li>
</template>
<script setup lang="ts">
import {Link, usePage} from '@inertiajs/vue3'
import AppIcon from  '../AppIcon.vue'
import {IMenu, AppMenuItem} from "@/types";
import SubMenuItem from "@/Components/AppMenu/SubMenuItem.vue";
import {computed, ref} from "vue";
import useMenu from "@/Components/AppMenu/useMenu";

const props = defineProps<{
  item: AppMenuItem,
  menu: IMenu,
  initExpanded?: boolean,
}>()
const { url } = usePage()
const { setSelected } = useMenu()
const isExpanded = ref(props.initExpanded)
const hasChildren = computed(() => { return props.item.children?.length })

const onClick = () => {
  isExpanded.value = !isExpanded.value
  //setSelected(props.item)
}

</script>