<template>
  <li>
    <button @click.stop="onClick"
            type="button"
            :class="{[activeClasses]: isActive, [regularClasses]: true}"
            aria-controls="dropdown-pages"
            data-collapse-toggle="dropdown-pages">
      <app-icon v-if="item.icon" :name="item.icon" class="w-5 h-5 mr-2 text-gray-600" />
      <template v-if="hasChildren">
        <div class="flex-1 ml-2 text-left whitespace-nowrap">{{item.label}}</div>
      </template>
      <template v-else>
        <Link @click.stop="onClick"
              :href="`/${item.fullSlug}`"
              class="flex-1 text-left whitespace-nowrap"
              :class="[item.icon ? 'ml-2' : 'ml-9']"
        >
          {{item.label}}
        </Link>
      </template>
      <app-icon v-if="hasChildren" :name="!isExpanded ? 'ChevronRight' : 'ChevronDown'" class="w-5 h-5" />
    </button>
    <Transition name="collapse" >
    <ul v-if="hasChildren" v-show="isExpanded" id="dropdown-pages" class="py-2 space-y-2">
      <menu-item v-for="child in item.children" :item="child" :level="level+1" @select="onSelect" :selected-items="selectedItems" />
    </ul>
    </Transition>
  </li>
</template>
<script setup lang="ts">
import {Link, usePage} from '@inertiajs/vue3'
import AppIcon from  '../AppIcon.vue'
import {AppMenuItem} from "@/types";
import {computed, defineEmits, ref} from "vue";

const props = defineProps<{
  item: AppMenuItem,
  selectedItems?: number[],
  level: number,
  initExpanded?: boolean,
}>()

interface IMenuItemEmits {
  (e: 'select', item: AppMenuItem) : void
}

const emit = defineEmits<IMenuItemEmits>()

const { url } = usePage()
const isExpanded = ref(props.initExpanded)
const hasChildren = computed(() => { return props.item.children?.length })
const isActive = computed(() => {
  return props.selectedItems?.includes(props.item.id)
})

const onClick = () => {
  console.log("menuItem onClick")
  isExpanded.value = !isExpanded.value
  emit('select', props.item)
}

const onSelect = (item: AppMenuItem) => {
  console.log("MenuItem onSelect", item.name)
  emit('select', item)
}

const activeClasses = computed(() => {
  return props.level === 0 ? 'bg-gray-200' : 'underline'
})

const regularClasses = computed(() => {
  let all = 'flex items-center  w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group '
  if(props.level === 0){
    all += ' p-2 hover:bg-gray-200'
  } else {
    all += ' px-2'
  }
  return all
})

</script>