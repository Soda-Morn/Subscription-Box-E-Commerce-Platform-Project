<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-normal text-gray-800 mb-1">My Box</h1>
      <p class="text-sm text-gray-500">Your June 2026 Premium Box — ships June 30.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Product slots -->
      <div class="lg:col-span-2 card p-5">
        <h3 class="text-sm font-semibold text-gray-800 mb-4">This Month's Products</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="product in products" :key="product.name"
            class="border border-gray-100 rounded-lg p-3 text-center hover:border-primary/30 transition-colors">
            <div class="text-4xl mb-2">{{ product.icon }}</div>
            <p class="text-xs font-medium text-gray-800">{{ product.name }}</p>
            <p class="text-xs text-gray-400 mt-0.5">{{ product.origin }}</p>
          </div>
        </div>
      </div>

      <!-- Box info -->
      <div class="space-y-4">
        <div class="card p-4">
          <h3 class="text-sm font-semibold text-gray-800 mb-3">Box Details</h3>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between text-gray-600"><span>Plan</span><span class="font-medium text-gray-800">Premium Box</span></div>
            <div class="flex justify-between text-gray-600"><span>Items</span><span class="font-medium text-gray-800">14 products</span></div>
            <div class="flex justify-between text-gray-600"><span>Status</span><span class="badge badge-info">Curating</span></div>
            <div class="flex justify-between text-gray-600"><span>Ships</span><span class="font-medium text-gray-800">Jun 30</span></div>
          </div>
        </div>
        <RouterLink to="/subscription" class="btn btn-outline w-full justify-center">
          Update Preferences
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const products = [
  { name: 'Jasmine Tea',      icon: '🍵', origin: 'Mondulkiri'  },
  { name: 'Palm Sugar',       icon: '🍯', origin: 'Takeo'       },
  { name: 'Coffee Blend',     icon: '☕', origin: 'Ratanakiri'  },
  { name: 'Pandan Extract',   icon: '🌿', origin: 'Kampot'      },
  { name: 'Tamarind Candy',   icon: '🍬', origin: 'Battambang'  },
  { name: 'Coconut Chips',    icon: '🥥', origin: 'Koh Kong'    },
  { name: 'Lemongrass Oil',   icon: '🫙', origin: 'Siem Reap'   },
  { name: 'Dried Mango',      icon: '🥭', origin: 'Kampong Speu'},
]
</script>
