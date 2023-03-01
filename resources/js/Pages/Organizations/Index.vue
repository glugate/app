<template>
  <div>
    <Head title="Organizations" />
    <ResourceHeader resourceNameSingular="Organization"/>
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
    <AppTable :items="organizations" resource-slug="organizations" />
  </div>
</template>

<script>
import Layout from '@/Shared/Layout.vue'
export default {
  layout: Layout
};
</script>
<script setup>
import {reactive, watch} from "vue";
import { Head, router } from '@inertiajs/vue3'
import mapValues from 'lodash/mapValues'
import pickBy from 'lodash/pickBy'
import throttle from 'lodash/throttle'

import ModelTable from '@/Shared/ModelTable.vue'
import AppTable from '@/Components/AppTable/Index.vue'
import ResourceHeader from '@/Shared/ResourceHeader.vue'
import SearchFilter from '@/Shared/SearchFilter.vue'

const props = defineProps({
  filters: Object,
  organizations: Object,
})

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
