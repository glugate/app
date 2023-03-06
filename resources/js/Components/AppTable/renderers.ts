import {h, Suspense} from "vue";
import {RowData, TableColumn, TableRenderProps} from "./types";
import AppIcon from  '../AppIcon.vue'

export const textWithIconRenderer = (row: RowData, col: TableColumn, props: TableRenderProps) => {
    return h(
        'td',
        { class: 'px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white' },
        h(
            'div',
            {class: 'flex items-center'},
            [
                h(AppIcon, {
                    name: props.icon,
                    class: 'text-gray-300'
                }),
                row[col.key]
            ]
        )
    )
}

export const textWithColorCircleRenderer = (row: RowData, col: TableColumn,  props: TableRenderProps) => {
    return h('td', "circle r!")
}

export const texRenderer = (row: RowData, col: TableColumn,  props: TableRenderProps) => {
    return h( 'td', {class: 'px-4 py-2 font-medium text-gray-900 whitespace-nowrap'},  row[col.key])
}

export const getTableCellRenderer = (key: string) => {
    switch(key) {
        case "text_with_icon" :
            return textWithIconRenderer
            break
        case "text_with_color_circle" :
            return textWithColorCircleRenderer
            break
        default :
            return texRenderer

    }
}