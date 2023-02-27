<template>
  <div class="menu">
    <div class="mb-1 nav-link">
      <Link href="/" class="group flex items-center py-3 px-6" :class="isUrl('') ? 'active bg-gray-100 text-main-600' : ''">
        <icon name="dashboard" class="mr-2 w-5 h-5" />
        <div>Dashboard</div>
      </Link>
    </div>
    <div class="mb-1 nav-link">
      <Link href="/organizations" class="group flex items-center py-3 px-6" :class="isUrl('organizations') ? 'active bg-gray-100 text-main-600' : ''">
        <icon name="office" class="mr-2 w-5 h-5" />
        <div>Organizations</div>
      </Link>
    </div>
    <div class="mb-1 nav-link">
      <Link href="/contacts" class="group flex items-center py-3 px-6" :class="isUrl('contacts') ? 'active bg-gray-100 text-main-600' : ''">
        <icon name="users" class="mr-2 w-5 h-5" />
        <div>Contacts</div>
      </Link>
    </div>
    <div class="mb-1 nav-link">
      <Link href="/services" class="group flex items-center py-3 px-6" :class="isUrl('services') ? 'active bg-gray-100 text-main-600' : ''">
        <icon name="printer" class="mr-2 w-5 h-5" />
        <div>Services</div>
      </Link>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'

export default {
  components: {
    Icon,
    Link,
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1)
      if (urls[0] === '') {
        return currentUrl === ''
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length
    },
  },
}
</script>
