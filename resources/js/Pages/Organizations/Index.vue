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
    key: "phone",
    render: 'text_with_icon',
    renderProps: {
      icon: 'PhoneFilled'
    }
  },
  {
    type: "string",
    key: "address",
    render: 'text_with_icon',
    renderProps: {
      icon: 'MapMarker'
    }
  }
])

</script>
