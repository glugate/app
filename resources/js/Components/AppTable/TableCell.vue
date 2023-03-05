<script lang="ts">
import { VNodeChild, PropType, h, render } from "vue"
import type {RowData, TableColumn} from "./types"
import { makeLinkIf } from "../../Helpers/appLink"
import { ResourceInfo } from '../../types';
import { getTableCellRenderer } from "./renderers";

export default {
  props: {
    row: {
      type: Object as PropType<RowData>,
      required: true,
    },
    column: {
      type: Object as PropType<TableColumn>,
      required: true,
    },
    resourceInfo: {
      type: Object as PropType<ResourceInfo>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props){
   
    const { column, row, resourceInfo, index } = props
    const { id } = row
    
    return () => {
      const { render, linkable } = column
      const doLink = linkable ?? false

      //console.log("TC", row[column.key], column)

      if(render){
        if(typeof render === 'function'){
          return render(row, index)
        } else {
          return getTableCellRenderer(render)(row, column)
        }
      }
      switch(column.key) {
        case 'country' :
          return h(
            'td', 
            {class: 'px-4 py-2'}, 
            makeLinkIf(doLink, `/${resourceInfo.slug_plural}/${id}`, h(
              'span',
              {class: 'bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300'},
              row[column.key]
            ))
          )
        default :
          // Regular text
          return h(
            'td', 
            {class: 'px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'}, 
            makeLinkIf(doLink, `/${resourceInfo.slug_plural}/${id}`, h(
              'span',
              {class: ''},
              row[column.key]
            ))
          )
      }
    };
  }
}

</script>