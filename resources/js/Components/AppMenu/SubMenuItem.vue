<template>
  <li>
    <Link
        @click="onClick"
        :href="`/${item.fullSlug}`"
        class="flex items-center px-2 py-1 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group focus:bg-primary-100 hover:bg-primary-100"
        :class="{'bg-red-500': isActive}"
    >
      {{item.label}}
    </Link>
  </li>
</template>
<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'
import {AppMenuItem} from "@/types";
import {ref} from "vue";
import useMenu from "@/Components/AppMenu/useMenu";
import {trim} from "lodash";
const props = defineProps<{
  item: AppMenuItem
}>()

const { url } = usePage()
const { menu, setSelected } = useMenu()
const isActive = ref(false)
const onClick = () => {
  console.log(props.item)
  setSelected(props.item)
}
</script>