<template>
  <field-renderer
      :row="props.row"
      :column="tdRenderPropsColumn"
      :resource-info="props.resourceInfo"
      :index="props.index"
      class="px-4 py-2"
      as="td"
  />
</template>
<script setup lang="ts">
import {RowData, TableColumn} from "@/Components/AppTable/types";

interface IFieldRendererProps {
  row: RowData
  column: TableColumn
  resourceInfo: ResourceInfo
  index: number
}
import FieldRenderer from "@/Components/Resource/FieldRenderer.vue";
import {ResourceInfo} from "@/types";
import {computed} from "vue";

const props = defineProps<IFieldRendererProps>()

const tdRenderPropsColumn = computed(() => {
  let newPropsCol = props.column
  if(!newPropsCol.renderProps){
    newPropsCol.renderProps = {}
  }
  newPropsCol.renderProps.as = 'td'
  return newPropsCol
})

</script>