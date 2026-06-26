<template>
  <!--
    SubscriberLayout — same InApp fixed layout but for subscribers
    Sidebar shows subscriber menu, topbar shows page title + status badge
  -->
  <div>

    <!-- Sidebar -->
    <AppSidebar role="subscriber" @logout="handleLogout" />

    <!-- Topbar -->
    <nav class="topbar" style="margin-left: 240px;">

      <!-- Page title -->
      <span class="text-sm font-semibold text-gray-800">{{ pageTitle }}</span>

      <!-- Right side -->
      <div class="ml-auto flex items-center gap-3">

        <!-- Active subscription badge -->
        <span class="badge badge-success text-[11px]">
          ● Active · Premium Box
        </span>

        <!-- Bell -->
        <button class="btn btn-light btn-sm rounded-full !p-0 w-9 h-9 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6"/>
            <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
          </svg>
        </button>

        <!-- Avatar + name -->
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
            {{ userInitials }}
          </div>
          <span class="text-sm font-medium text-gray-800">{{ userName }}</span>
        </div>

        <!-- Logout -->
        <button @click="handleLogout" class="btn btn-outline btn-sm text-danger border-red-200">
          ↩ Logout
        </button>

      </div>
    </nav>

    <!-- Main content -->
    <main class="content">
      <div class="px-6 pb-10">
        <RouterView />
      </div>
    </main>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import AppSidebar from '@/components/AppSidebar.vue'

const route     = useRoute()
const router    = useRouter()
const authStore = useAuthStore()

// Page title comes from route meta (set in router/index.js)
const pageTitle = computed(() => route.meta.title || 'Dashboard')

const userName = computed(() => authStore.user?.name || 'Subscriber')

const userInitials = computed(() => {
  const parts = userName.value.split(' ')
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : userName.value.slice(0, 2).toUpperCase()
})

function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>
