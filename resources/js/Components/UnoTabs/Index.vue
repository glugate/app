<template>
  <section class="w-full max-w-200 mx-auto overflow-auto relative">
    <div class="relative ">
      <div class="xl:flex justify-between mb-5 border-b border-gray-200">
        <div class="flex items-center">
          <a v-for="tab in tabs"
             @click="setActiveTab(tab.id)"
             :key="tab.id"
             class="group relative mr-2 after:block after:pb-3 after:ml-2 after:w-4/5"
             :class="{' after:border-b-2 after:border-primary-400' : activeTab==tab.id}" href="#">
            <div class="px-2 py-2 rounded group-hover:bg-gray-200">{{tab.label}}</div>
          </a>
        </div>
        <div class="flex items-center">

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {reactive} from "vue";

defineProps<{
  activeTab?: string,
}>()

const tabs = reactive([
  {
    id: 'general',
    label: 'General'
  },
  {
    id: 'contacts',
    label: 'Contacts'
  },
  {
    id: 'users',
    label: 'Users'
  },
])

</script>
