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

const resourceInfo = buildResourceInfo('contacts', [
  {
    key: "name",
    type: 'string',
    linkable: true,
  },
  {
    key: "city",
    type: 'string',
  },
  {
    key: "phone",
    type: 'string',
    render: 'text_with_icon',
    renderProps: {
      icon: 'PhoneFilled'
    }
  },
  {
    key: "address",
    type: 'string',
    render: 'text_with_icon',
    renderProps: {
      icon: 'MapMarker'
    }
  }
])

</script>
