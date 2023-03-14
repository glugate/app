<template>
  <render {{...$attrs}} />
</template>
<script setup lang="ts">
import { h } from "vue"
import type {RowData, TableColumn} from "@/Components/AppTable/types"
import {getTableCellRenderer} from '@/Components/AppTable/renderers'
import { makeLinkIf } from "../../Helpers/appLink"
import { ResourceInfo } from '../../types';

interface IFieldRendererProps {
  row: RowData
  column: TableColumn
  resourceInfo: ResourceInfo
  index: number,
  as?: string
}

const props = defineProps<IFieldRendererProps>()
const render = () => {
  const { column, row, resourceInfo, index } = props
  const { id } = row

  const tcRenderer = column.render
  const linkable = column.linkable
  const doLink = linkable ?? false
  const rendererAs = props.as ?? column.renderProps?.as ?? 'span';

  if(tcRenderer){
    if(typeof tcRenderer === 'function'){
      return tcRenderer(row, index)
    } else {
      return getTableCellRenderer(tcRenderer)(row, column, column.renderProps)
    }
  }
  switch(column.key) {
    case 'country' :
      return h(
          rendererAs,
          {class: ''},
          makeLinkIf(doLink, `/${resourceInfo.slug_plural}/${id}`, h(
              'span',
              {class: 'bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900'},
              row[column.key]
          ))
      )
    default :
      // Regular text
      return h(
          rendererAs,
          {class: 'font-medium text-gray-900 whitespace-nowrap'},
          makeLinkIf(doLink, `/${resourceInfo.slug_plural}/${id}`, h(
              'span',
              {class: ''},
              row[column.key]
          ))
      )
  }
}
</script>