<template>
  <section class="">
    <div class="mx-auto bg-white">
      <div class="relative overflow-hidden  shadow-md sm:rounded-lg">
        <div class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 mb-2">
          <div class="flex items-center flex-1 space-x-4">
            <h5>
              <span class="text-gray-500">All {{ resourceInfo.title_plural }}: </span>
              <span class="dark:text-white">{{ items.total }}</span>
            </h5>
          </div>
          <div class="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
            <primary-button>Add new {{ resourceInfo.title_singular }}</primary-button>
            <secondary-button>Export</secondary-button>
          </div>
        </div>
        <div class="overflow-x-auto bg-white">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input id="checkbox-all" type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="checkbox-all" class="sr-only">checkbox</label>
                </div>
              </th>
              <template v-for="column in resourceInfo.columns">
                <template v-if="column.table">
                  <table-header
                      :column="column"
                      :sort-key="sortKey"
                      :sortDir="sortDir"
                      @sort="onSort" />
                </template>
              </template>

            </tr>
            </thead>
            <tbody>
            <template v-for="(item, index) in items.data" :key="index">
              <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td class="w-4 px-4 py-3">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" onclick="event.stopPropagation()" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <template v-for="column in resourceInfo.columns">
                  <template v-if="column.table">
                    <table-cell :row="item" :column="column" :resource-info="resourceInfo" :index="index" />
                  </template>
                </template>

              </tr>
            </template>
            </tbody>
          </table>
        </div>
        <nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0" aria-label="Table navigation">
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing
                  <span class="font-semibold text-gray-900 dark:text-white">{{items.from}}-{{items.to}}</span>
                  of
                  <span class="font-semibold text-gray-900 dark:text-white">{{items.total}}</span>
              </span>
          <pagination :links="items.links" class="inline-flex items-stretch -space-x-px" />
        </nav>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import type {Paginate, RowData } from './types';
import {ResourceInfo} from "../../types";
import {Pagination, PrimaryButton, SecondaryButton, TableCell, TableHeader} from "@/Components";
import propsWithDefaults from "@/Components/AppTable/propsWithDefaults";
import useSort from "@/Components/AppTable/useSort"

const props = defineProps({
  ...propsWithDefaults,
  items: {
    type: Object as PropType<Paginate<RowData>>,
    required: true,
  },
  resourceInfo: {
    type: Object as PropType<ResourceInfo>,
    required: true,
  }
})

const { onSort, sortDir, sortKey } = useSort()


</script>