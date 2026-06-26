<template>
  <!--
    AdminLayout — matches InApp layout exactly:
    • Sidebar:  fixed, 240px wide, white, left side
    • Topbar:   fixed, 60px tall, white, margin-left 240px
    • Content:  margin-left 240px, padding-top 60px
  -->
  <div>

    <!-- ── Sidebar ─────────────────────────────────────────────────────── -->
    <AppSidebar role="admin" @logout="handleLogout" />

    <!-- ── Topbar ──────────────────────────────────────────────────────── -->
    <nav class="topbar" style="margin-left: 240px;">

      <!-- Sidebar toggle button (like InApp's toggle) -->
      <button class="btn btn-light btn-sm mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 3v18"/>
        </svg>
      </button>

      <!-- Right side: bell + user avatar -->
      <div class="ml-auto flex items-center gap-2">

        <!-- Notification bell -->
        <div class="relative">
          <button
            @click="showNotif = !showNotif"
            class="btn btn-light btn-sm rounded-full !p-0 w-9 h-9 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6"/>
              <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
            </svg>
          </button>
          <!-- Red dot badge -->
          <span class="absolute top-0.5 right-0.5 bg-danger text-white text-[9px] font-bold px-1 rounded-full leading-none">
            3
          </span>

          <!-- Notification dropdown -->
          <div v-if="showNotif"
            class="absolute right-0 top-11 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
            <div class="px-4 py-3 border-b border-gray-100 font-semibold text-sm text-gray-800">
              Notifications
            </div>
            <ul class="list-none p-0 m-0">
              <li v-for="n in notifications" :key="n.id"
                class="flex items-start gap-3 px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
                <div class="w-9 h-9 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                  :style="{ background: n.bg }">{{ n.icon }}</div>
                <div class="flex-1 min-w-0">
                  <p class="text-[13px] font-medium text-gray-800 mb-0.5">{{ n.title }}</p>
                  <p class="text-xs text-gray-500 mb-0.5">{{ n.desc }}</p>
                  <p class="text-[11px] text-gray-400">{{ n.time }}</p>
                </div>
              </li>
              <li class="px-4 py-2.5 text-center">
                <RouterLink to="/admin/activity-log" class="text-xs text-primary hover:underline" @click="showNotif = false">
                  View all notifications
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- User avatar dropdown -->
        <div class="relative">
          <button
            @click="showUser = !showUser"
            class="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors border-none bg-transparent cursor-pointer"
          >
            <!-- Avatar circle -->
            <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
              {{ userInitials }}
            </div>
            <span class="text-sm font-medium text-gray-800">{{ userName }}</span>
          </button>

          <!-- User dropdown -->
          <div v-if="showUser"
            class="absolute right-0 top-11 min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
            <!-- Header -->
            <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                {{ userInitials }}
              </div>
              <div>
                <p class="text-sm font-semibold text-gray-800 mb-0">{{ userName }}</p>
                <p class="text-xs text-gray-400 mb-0">Administrator</p>
              </div>
            </div>
            <!-- Links -->
            <div class="p-2">
              <a href="#"
                class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-50 hover:text-primary">
                ⚙️ Account Settings
              </a>
              <button
                @click="handleLogout"
                class="flex items-center gap-2 px-3 py-2 text-sm text-danger w-full text-left rounded-lg hover:bg-red-50 border-none bg-transparent cursor-pointer">
                ↩ Sign Out
              </button>
            </div>
          </div>
        </div>

      </div>
    </nav>

    <!-- ── Main content ─────────────────────────────────────────────────── -->
    <!-- Click on content closes any open dropdowns -->
    <main class="content" @click="showNotif = false; showUser = false">
      <div class="px-6 pb-10">
        <RouterView />
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import AppSidebar from '@/components/AppSidebar.vue'

const router    = useRouter()
const authStore = useAuthStore()

// Dropdown state
const showNotif = ref(false)
const showUser  = ref(false)

// User display name from store (fallback: "Admin User")
const userName = computed(() => authStore.user?.name || 'Admin User')

// First letters of first + last name
const userInitials = computed(() => {
  const parts = userName.value.split(' ')
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : userName.value.slice(0, 2).toUpperCase()
})

// Demo notifications
const notifications = [
  { id: 1, icon: '👤', bg: '#f0fdf4', title: 'New subscriber registered',  desc: 'Sarah Chen signed up for Premium Box', time: '5 minutes ago'  },
  { id: 2, icon: '💳', bg: '#fef2f2', title: 'Payment failed',             desc: 'John Doe — retry scheduled in 3 days', time: '30 minutes ago' },
  { id: 3, icon: '📦', bg: '#fffbeb', title: 'Box curation locked',        desc: 'July box is ready for shipping',       time: '1 hour ago'     },
]

function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>
