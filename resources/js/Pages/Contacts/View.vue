<template>
  <div>
    <Head title="Organization"/>
    <ResourceView :resource-info="resourceInfo" :resource-data="contact"></ResourceView>
  </div>
</template>
<script lang="ts">
import Layout from "../../Layouts/Layout.vue"
import { columns } from "./types";
export default {
  layout: Layout
};
</script>
<script setup lang="ts">
import {Head, Link} from '@inertiajs/vue3'
import ResourceView from '@/Components/Resource/View.vue'
import {IResourceFilters, ResourceInfo} from "../../types"
import { resourceInfo } from './types'

defineProps<{
  contact: Object
}>()

</script>