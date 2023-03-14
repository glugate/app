import {ref} from "vue";
import {router} from "@inertiajs/vue3";

export default function useSort() {
    const sortKey = ref<string>('name')
    const sortDir = ref<string>('asc')

    const onSort = (pSortKey: string) => {

        if(sortKey.value != pSortKey){
            sortKey.value = pSortKey
            // Reset sort dir when we have new sort key
            sortDir.value = 'asc'
        } else {
            // toggle
            sortDir.value = (sortDir.value == 'asc' ? 'desc' : 'asc')
        }

        router.reload({
            data: {
                sort_key: sortKey.value,
                sort_dir: sortDir.value,
            }
        })
    }

    return {
        sortKey,
        sortDir,
        onSort
    }
}