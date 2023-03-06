import {ref} from "vue";
import {IMenu, AppMenuItem} from "@/types";
import {usePage} from "@inertiajs/vue3";

var initMenu: IMenu | null = null;


export default function useMenu() {
    const { url } = usePage()
    const menu = ref(initMenu)
    const selectedItem = ref<AppMenuItem>()

    const setSelected = (item: AppMenuItem) => {
        selectedItem.value = item
    }

    return {
        menu,
        setSelected,
        selectedItem
    }
}

export function buildSlugs(menu: IMenu){
    if(menu){
        menu.items.forEach((o, i) => {
            let cSlug = `${o.slug}`
            o.fullSlug = cSlug
            o.isSelected = true
            o.children?.forEach((c, j) => {
                c.fullSlug = `${cSlug}/${c.slug}`
            })
        })
    }

    return menu
}