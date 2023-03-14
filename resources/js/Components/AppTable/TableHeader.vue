<template>
  <th scope="col" class="px-4 py-3">
    <template v-if="column.sortable">
      <div @click="onClick" class="flex items-center justify-between cursor-pointer">
        <div>{{column.title}}</div>
        <template v-if="sortKey == column.key">
          <app-icon :name="sortDir == 'asc' ? 'ChevronsUp' : 'ChevronsDown'" class="w-5 h-h" />
        </template>
        <template v-else>
          <app-icon name="ChevronUpDown16Regular" class="text-low w-5 h-h" />
        </template>
      </div>
    </template>
    <template v-else>
      {{column.title}}
    </template>
  </th>
</template>
<script setup lang="ts">
import {TableColumn} from "@/Components/AppTable/types";
import AppIcon from "@/Components/AppIcon.vue";
import {PropType, ref, toRefs} from "vue";

interface ITableHeaderEmits {
  (e: 'sort', key: string) : void
}

const emit = defineEmits<ITableHeaderEmits>()
const props = defineProps({
  column: {
    type: Object as PropType<TableColumn>,
    required: true,
  },
  sortKey: {
    type: String,
    default: ''
  },
  sortDir: {
    type: String,
    default: ''
  }
})

const sortDir = ref(props.sortDir)

const onClick = () => {
  sortDir.value = (sortDir.value === 'asc' ? 'desc' : 'asc')
  emit('sort', props.column.key as string)
}
</script>