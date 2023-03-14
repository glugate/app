<template>
  <Resource :resource-info="resourceInfo" :items="items" :filters="filters" />
</template>
<script lang="ts">
import Layout from "../../Layouts/Layout.vue"
import {resourceInfo} from "@/Pages/Contacts/types";

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

</script>
