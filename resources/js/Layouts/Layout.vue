<template>
  <div>
    <div id="dropdown" />
    <div class="md:flex md:flex-col">
      <div class="md:flex md:flex-col md:h-screen">
        <div class="md:flex md:flex-shrink-0">
          <div class="flex items-center justify-between px-6 py-4 bg-primary-600 md:flex-shrink-0 md:justify-center md:w-56">
            <Link class="mt-1" href="/">
              <logo class="fill-white" width="120" />
            </Link>
            <dropdown class="md:hidden" placement="bottom-end">
              <template #default>
                <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              </template>
              <template #dropdown>
                <div class="mt-2 py-2 bg-white rounded shadow-lg">
                  <app-menu :menu="menu" :is-mobile="true" />
                </div>
              </template>
            </dropdown>
          </div>
          <div class="md:text-md flex items-center justify-between p-4 w-full text-sm bg-white border-b md:px-12 md:py-0">
            <div class="mr-4 mt-1 text-gray-400">
              Uno: {{ meta.version.uno }} - Laravel: {{ meta.version.laravel }} - PHP: {{ meta.version.php }}
            </div>

            <dropdown class="mt-1" placement="bottom-end">
              <template #default>
                <div class="group flex items-center cursor-pointer select-none">
                  <div class="mr-1 text-gray-700 focus:text-primary-600 whitespace-nowrap">
                    <span>{{ auth.user.first_name }}</span>
                    <span class="hidden md:inline">&nbsp;{{ auth.user.last_name }}</span>
                  </div>
                  <icon class="w-5 h-5 fill-gray-700 group-hover:fill-main-600 focus:fill-main-600" name="cheveron-down" />
                </div>
              </template>
              <template #dropdown>
                <div class="mt-2 py-2 text-sm bg-white rounded shadow-xl">
                  <Link class="block px-6 py-2 hover:bg-gray-200" :href="`/users/${auth.user.id}/edit`">My Profile</Link>
                  <Link class="block px-6 py-2 hover:bg-gray-200" href="/users">Manage Users</Link>
                  <Link class="block px-6 py-2 w-full text-left  hover:bg-gray-200" href="/logout" method="post" as="button">Logout</Link>
                </div>
              </template>
            </dropdown>
          </div>
        </div>
        <div class="md:flex md:flex-grow md:overflow-hidden ">
          <app-menu :menu="menu" class="hidden flex-shrink-0 pt-6 w-56 bg-white overflow-y-auto shadow md:block" />
          <div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>
            <flash-messages />
            SEL: {{selectedItem}}
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import Logo from '@/Shared/Logo.vue'
import Dropdown from '@/Shared/Dropdown.vue'
import FlashMessages from '@/Shared/FlashMessages.vue'
import AppMenu from "@/Components/AppMenu/Index.vue";
import {AppData} from '../types'
import useMenu, {buildSlugs} from "@/Components/AppMenu/useMenu";

const props = defineProps<{
  auth: any,
  meta: any,
  app_data: AppData
}>()

const { menu, selectedItem } = useMenu()
menu.value = buildSlugs(props.app_data.main_menu)
</script>
