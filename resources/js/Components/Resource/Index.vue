<template>
    <div>
      <Head title="Organizations" />
      <ResourceHeader :resourceNameSingular="resourceInfo.title_singular"/>
      <div class="flex items-center justify-between mb-6">
        <search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
          <label class="block text-gray-700">Trashed:</label>
          <select v-model="form.trashed" class="form-select mt-1 w-full">
            <option :value="null" />
            <option value="with">With Trashed</option>
            <option value="only">Only Trashed</option>
          </select>
        </search-filter>
  
      </div>
      <AppTable :items="items" :resource-info="resourceInfo" />
    </div>
  </template>

  <script setup  lang="ts">
  import {reactive, watch} from "vue";
  import { Head, router } from '@inertiajs/vue3'
  import mapValues from 'lodash/mapValues'
  import pickBy from 'lodash/pickBy'
  import throttle from 'lodash/throttle'
  import AppTable from '../AppTable/Index.vue'
  import ResourceHeader from '@/Shared/ResourceHeader.vue'
  import SearchFilter from '@/Shared/SearchFilter.vue'
  import {IResourceFilters, ResourceInfo} from "../../types"

  const props = defineProps<{
    filters: IResourceFilters,
    items: Object,
    resourceInfo: ResourceInfo
  }>()
  
  const form = reactive({
    search: props.filters.search,
    trashed: props.filters.trashed,
  })
  
  watch(form, throttle(() => {
    router.get('/organizations', pickBy(form), { preserveState: true })
  }, 200));
  
  function reset() {
    this.form = mapValues(this.form, () => null)
  }


  </script>
  