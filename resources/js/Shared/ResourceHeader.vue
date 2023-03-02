<template>
  <section class="w-full max-w-200 mx-auto overflow-auto relative">
    <div class="relative ">
      <header class="flex items-center h-5 mb-8">
        <h2 class="text-2xl font-medium dark:text-dark-95">{{_resourceNamePlural}}</h2></header>
      <div class="hidden xl:flex justify-between mb-5 border-b border-gray-200">
        <div class="flex items-center">
          <a v-for="tab in tabs"
             @click="setActiveTab(tab.id)"
             :key="tab.id"
             class="group relative -ml-1.5 mr-2 after:block after:pb-4 after:ml-2 after:w-4/5"
             :class="{' after:border-b-2 after:border-primary-400' : activeTab==tab.id}" href="#">
            <div class="px-2 py-2 rounded group-hover:bg-gray-200">{{tab.label}}</div>
          </a>
        </div>
        <div class="flex items-center">
          <AppButton href="/organizations/create">Create {{resourceNameSingular}}</AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import AppButton from '@/Shared/AppButton.vue'
import {v4 as uuid} from "uuid";
export default {
  components: {
    AppButton,
    Link,
  },
  props: {
    resourceNameSingular: String,
    resourceNamePlural: String,
  },
  data() {
    return {
      tabs: [
        {
          id: 'general',
          label: 'General'
        },
        {
          id: 'relations',
          label: 'Relations'
        },
      ],
      activeTab: 'general'
    }
  },
  computed: {
    _resourceNamePlural: {
      get() {
        return this.resourceNamePlural ?? (this.resourceNameSingular + 's');
      },
    }
  },
  methods: {
    setActiveTab(id){
      this.activeTab = id;
    }
  }
}
</script>
