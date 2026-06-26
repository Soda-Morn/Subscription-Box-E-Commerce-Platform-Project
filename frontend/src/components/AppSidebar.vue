<template>
  <!--
    AppSidebar — white fixed sidebar, exactly like InApp template
    Props: role = 'admin' | 'subscriber'
    Emits: logout
  -->
  <aside class="sidebar">

    <!-- Logo area — sits at the very top (position: absolute) -->
    <div class="logo-area">
      <div class="flex items-center gap-2">
        <!-- Logo icon box -->
        <div class="w-7 h-7 bg-primary rounded flex items-center justify-center text-white text-sm font-bold">
          M
        </div>
        <span class="font-semibold text-sm text-gray-800">Morn Soda</span>
      </div>
    </div>

    <!-- Navigation list -->
    <ul class="list-none p-0 m-0 py-2">

      <!-- ── ADMIN MENU ────────────────────────────────────────────────── -->
      <template v-if="role === 'admin'">

        <!-- Main section -->
        <li><span class="nav-label">Main</span></li>

        <li v-for="item in mainMenu" :key="item.path">
          <RouterLink
            :to="item.path"
            class="nav-link"
            :class="{ active: isActive(item.path) }"
          >
            <span class="text-lg w-5 text-center leading-none">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
            <!-- Red badge (e.g. for "8 new subscribers") -->
            <span v-if="item.badge"
              class="ml-auto bg-danger text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              {{ item.badge }}
            </span>
          </RouterLink>
        </li>

        <!-- Management section -->
        <li><span class="nav-label mt-2">Management</span></li>

        <li v-for="item in managementMenu" :key="item.path">
          <RouterLink
            :to="item.path"
            class="nav-link"
            :class="{ active: isActive(item.path) }"
          >
            <span class="text-lg w-5 text-center leading-none">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
            <span v-if="item.badge"
              class="ml-auto bg-danger text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              {{ item.badge }}
            </span>
          </RouterLink>
        </li>

        <!-- Operations section -->
        <li><span class="nav-label mt-2">Operations</span></li>

        <li v-for="item in operationsMenu" :key="item.path">
          <RouterLink
            :to="item.path"
            class="nav-link"
            :class="{ active: isActive(item.path) }"
          >
            <span class="text-lg w-5 text-center leading-none">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
            <span v-if="item.badge"
              class="ml-auto bg-danger text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              {{ item.badge }}
            </span>
          </RouterLink>
        </li>

        <!-- Account section -->
        <li><span class="nav-label mt-2">Account</span></li>
        <li>
          <button
            @click="$emit('logout')"
            class="nav-link w-full text-left border-none bg-transparent cursor-pointer"
          >
            <span class="text-lg w-5 text-center leading-none">↩</span>
            <span>Log out</span>
          </button>
        </li>

      </template>

      <!-- ── SUBSCRIBER MENU ────────────────────────────────────────────── -->
      <template v-else>

        <li><span class="nav-label">Menu</span></li>

        <li v-for="item in subscriberMenu" :key="item.path">
          <RouterLink
            :to="item.path"
            class="nav-link"
            :class="{ active: isActive(item.path) }"
          >
            <span class="text-lg w-5 text-center leading-none">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </RouterLink>
        </li>

        <li><span class="nav-label mt-2">Account</span></li>
        <li>
          <button
            @click="$emit('logout')"
            class="nav-link w-full text-left border-none bg-transparent cursor-pointer"
          >
            <span class="text-lg w-5 text-center leading-none">↩</span>
            <span>Log out</span>
          </button>
        </li>

      </template>

    </ul>
  </aside>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

// Props
const props = defineProps({
  role: { type: String, default: 'subscriber' } // 'admin' or 'subscriber'
})

defineEmits(['logout'])

const route = useRoute()

// Check if a nav link should be highlighted as active
function isActive(path) {
  // Exact match for root-level pages
  if (path === '/admin') return route.path === '/admin'
  if (path === '/dashboard') return route.path === '/dashboard'
  // Prefix match for everything else (e.g. /admin/billing matches /admin/billing)
  return route.path.startsWith(path)
}

// Admin nav items
const mainMenu = [
  { path: '/admin',              icon: '⊞',  label: 'Dashboard'    },
  { path: '/admin/analytics',    icon: '📊', label: 'Analytics'    },
  { path: '/admin/activity-log', icon: '📋', label: 'Activity Log' },
]

const managementMenu = [
  { path: '/admin/subscribers', icon: '👥', label: 'Subscribers',        badge: '8' },
  { path: '/admin/plans',       icon: '📦', label: 'Subscription Plans'             },
  { path: '/admin/roles',       icon: '🔐', label: 'Roles & Permissions'            },
]

const operationsMenu = [
  { path: '/admin/box-curation', icon: '🎁', label: 'Box Curation'              },
  { path: '/admin/billing',      icon: '💳', label: 'Billing',       badge: '12' },
  { path: '/admin/inventory',    icon: '🏭', label: 'Inventory'                 },
  { path: '/admin/coupons',      icon: '🎟️', label: 'Coupons & Gifts'           },
]

// Subscriber nav items
const subscriberMenu = [
  { path: '/dashboard',       icon: '⊞',  label: 'Dashboard'        },
  { path: '/my-box',          icon: '📦', label: 'My Box'           },
  { path: '/subscription',    icon: '🔄', label: 'My Subscription'  },
  { path: '/profile',         icon: '👤', label: 'My Profile'       },
  { path: '/payment-history', icon: '💳', label: 'Payment History'  },
]
</script>
