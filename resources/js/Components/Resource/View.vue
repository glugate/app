<template>
    <div class="bg-white mb-2 rounded shadow p-3 flex items-center">
        <app-icon name="account" class="h-16 w-16 text-primary-500"></app-icon>
        <div>
            <div class="text-gray-400">{{resourceInfo.title_singular}}</div>
            <div class="text-xl">{{resourceData.name}}</div>
        </div>
    </div>
    <div class="md:flex">
        <div class="bg-white mb-2 rounded shadow p-3 mb-1 w-full md:w-1/3 md:mb-0 md:mr-2">
            <template  :key="col.key" v-for="(col, index) in resourceInfo.columns">
                <template v-if="col.view">
                  <div class="mb-1 border-b pb-2">
                    <div class="text-sm text-gray-400">{{col.title}}</div>
                    <field-renderer
                        :row="props.resourceData"
                        :column="col"
                        :resource-info="props.resourceInfo"
                        as="div"
                        :index="index" />
                  </div>
                </template>
            </template>
        </div>
        <div class="bg-white mb-2 rounded shadow p-3 w-full md:mb-0"></div>
    </div>
</template>

<script setup  lang="ts">
import type { ResourceInfo } from '@/types'
import AppIcon from '../AppIcon.vue';
import { RowData } from '../AppTable/types';
import FieldRenderer from "@/Components/Resource/FieldRenderer.vue";

interface IPorps {
    resourceInfo: ResourceInfo,
    resourceData: RowData
}
const props = defineProps<IPorps>()

</script>