<template>
  <div>
    <Head :title="form.name"/>
    <section class="w-full max-w-200 mx-auto overflow-auto relative">
      <div class="relative px-5 pt-3 pb-16 min-h-screen">
        <header class="flex items-center h-5 mb-8">
          <h2 class="text-2xl font-medium dark:text-dark-95">Organisation</h2></header>
          <div class="hidden xl:flex justify-between mb-5 border-b border-gray-200">
            <div class="flex items-center">
              <a v-for="tab in tabs" @click="() => { setActiveTab(tab.id) }" :key="tab.id" class="group relative  -ml-1.5 mr-2 after:block after:pb-4 after:ml-2 after:w-4/5" :class="{' after:border-b-2 after:border-main-400' : activeTab==tab.id}" href="#">
                <div class="px-2 py-2 rounded group-hover:bg-gray-200">{{tab.label}}</div>
              </a>
            </div>
            <div class="flex items-center">
              <a class="group relative pb-3" href="/account">
                <div class="px-2 py-2 rounded group-hover:bg-gray-200">Create new Organisation</div>
              </a>
            </div>
          </div>
      </div>

    </section>

  </div>
</template>

<script>
import {Head, Link} from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'
import TrashedMessage from '@/Shared/TrashedMessage.vue'

export default {
  components: {
    Head,
    Icon,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage,
  },
  layout: Layout,
  props: {
    organization: Object,
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        name: this.organization.name,
        email: this.organization.email,
        phone: this.organization.phone,
        address: this.organization.address,
        city: this.organization.city,
        region: this.organization.region,
        country: this.organization.country,
        postal_code: this.organization.postal_code,
      }),
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
  methods: {
    setActiveTab(id){
      this.activeTab =id;
    },
    update() {
      this.form.put(`/organizations/${this.organization.id}`)
    },
    destroy() {
      if (confirm('Are you sure you want to delete this organization?')) {
        this.$inertia.delete(`/organizations/${this.organization.id}`)
      }
    },
    restore() {
      if (confirm('Are you sure you want to restore this organization?')) {
        this.$inertia.put(`/organizations/${this.organization.id}/restore`)
      }
    },
  },
}
</script>
