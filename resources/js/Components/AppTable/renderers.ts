import {h, Suspense} from "vue";
import {RowData, tableCellRenderer, TableColumn, TableRenderProps} from "./types";
import AppIcon from  '@/Components/AppIcon.vue'

export const textWithIconRenderer = (row: RowData, col: TableColumn, props?: TableRenderProps) => {
    return h(
        props?.as ?? 'span',
        { class: 'font-medium text-gray-900 whitespace-nowrap' },
        h(
            'div',
            {class: 'flex items-center'},
            [
                h(AppIcon, {
                    name: props?.icon,
                    class: "w-5 h-5 mr-2 svg-low"
                }),
                h('div', row[col.key]),
            ]
        )
    )
}

export const textWithColorCircleRenderer = (row: RowData, col: TableColumn,  props?: TableRenderProps) => {
    return h(props?.as ?? 'span', "circle r!")
}

export const texRenderer = (row: RowData, col: TableColumn,  props?: TableRenderProps) => {
    return h( props?.as ?? 'span', {class: 'font-medium text-gray-900 whitespace-nowrap'},  row[col.key])
}

export const relationRenderer = (row: RowData, col: TableColumn,  props?: TableRenderProps) => {
    return h(props?.as ?? 'span', {class: 'font-medium text-primary-800 underline whitespace-nowrap'},  row[col.key]['name'])
}

export const getTableCellRenderer = (key: string): tableCellRenderer => {
    switch(key) {
        case "text_with_icon" :
            return textWithIconRenderer
            break
        case "text_with_color_circle" :
            return textWithColorCircleRenderer
            break
        case "relation" :
            return relationRenderer
            break
        default :
            return texRenderer

    }
}