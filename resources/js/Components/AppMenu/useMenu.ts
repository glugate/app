import {ref} from "vue";
import {IMenu, AppMenuItem} from "@/types";
import {usePage} from "@inertiajs/vue3";

var defaultMenu: IMenu | null = null;

export default function useMenu() {
    const { url } = usePage()
    const menu = ref(defaultMenu)
    const selectedItems = ref<number[]>()
    const setSelected = (ids: number[]) => {
        selectedItems.value = ids
    }
    return {
        menu,
        setSelected,
        selectedItems
    }
}

export function initMenu(menu: IMenu): IMenu{
    return readTree(menu)
}

/**
 * Tree nodes have only relative slugs (ex: "contacts", "list", "add").
 * Create absolute (full) slugs like: "contacts/add"
 *
 */
const readTree = (menu: IMenu): IMenu => {
    menu && menu.items.forEach(item => readTreeRec(item))
    return menu
}

const readTreeRec = (item: AppMenuItem, parent?: AppMenuItem): AppMenuItem => {
    item.fullSlug = parent ? `${parent.fullSlug}/${item.slug}` : item.slug
    if(parent){
        if(!item.parentIds){
            item.parentIds = []
        }
        item.parentIds.push(parent.id)
    }

    item.children?.forEach(ch => readTreeRec(ch, item))
    return item
}