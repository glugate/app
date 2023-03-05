import {h, Suspense} from "vue";
import {RowData, TableColumn} from "./types";
import AppIcon from  '../AppIcon.vue'

export const textWithIconRenderer = (row: RowData, col: TableColumn) => {
    return h( 'td', "icon r!")
}

export const textWithColorCircleRenderer = (row: RowData, col: TableColumn) => {
    return h('td', "circle r!")
}

export const texRenderer = (row: RowData, col: TableColumn) => {
    return h(
        'td',
        { class: 'px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white' },
         h(
             'div',
             {class: 'flex items-center'},
             [
                 h(Suspense, h(AppIcon, {
                     name: 'phone'
                 })),
                 row[col.key]
             ]
         )
    )
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