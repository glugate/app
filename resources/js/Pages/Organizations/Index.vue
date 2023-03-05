<template>
  <Resource :resource-info="resourceInfo" :items="items" :filters="filters" />
</template>
<script lang="ts">
import Layout from "../../Layouts/Layout.vue"
export default {
  layout: Layout
};
</script>
<script setup lang="ts">
import Resource from "../../Components/Resource/Index.vue"
import { IResourceFilters } from "../../types"
import {buildResourceInfo} from "../../Helpers/resourceMetaHelper";
const props = defineProps<{
  filters: IResourceFilters,
  items: Object,
}>()

const resourceInfo = buildResourceInfo('organizations', [
  {
    type: "string",
    key: "name",
    linkable: true
  },
  {
    type: "string",
    key: "country",
    /*render(row: RowData){
      return 'OK'
    }*/
  },
  {
    type: "string",
    key: "city"
  },
  {
    type: "string",
    key: "phone"
  },
  {
    type: "string",
    key: "address"
  }
])

</script>
