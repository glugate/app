<script lang="ts">
import { VNodeChild, PropType, h, render } from "vue"
import type {RowData, TableColumn} from "./types"
import { makeLinkIf } from "../../Helpers/appLink"

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
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props){
   
    const { column, row, index } = props
    const { id } = row
    
    return () => {
      const { render, linkable } = column
      const doLink = linkable ?? false
      if(render){
        return render(row, index)
      }
      switch(column.key) {
        case 'country' :
          return h(
            'td', 
            {class: 'px-4 py-2'}, 
            makeLinkIf(doLink, `/organizations/${id}`, h(
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
            makeLinkIf(doLink, `/organizations/${id}`, h(
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