<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-normal text-gray-800 mb-1">Dashboard</h1>
      <p class="text-sm text-gray-500">Welcome back, Sarah! Your next box ships in 8 days.</p>
    </div>

    <!-- 4 stat cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div class="card card-primary p-4">
        <div class="icon-shape icon-md bg-primary text-white rounded-lg mb-3">📦</div>
        <div class="text-xl font-bold text-gray-800">8</div>
        <div class="text-xs text-gray-500 mt-1">Boxes Received</div>
      </div>
      <div class="card card-success p-4">
        <div class="icon-shape icon-md bg-success text-white rounded-lg mb-3">💳</div>
        <div class="text-xl font-bold text-gray-800">$232</div>
        <div class="text-xs text-gray-500 mt-1">Total Spent</div>
      </div>
      <div class="card card-info p-4">
        <div class="icon-shape icon-md bg-info text-white rounded-lg mb-3">🎁</div>
        <div class="text-xl font-bold text-gray-800">3</div>
        <div class="text-xs text-gray-500 mt-1">Gifts Sent</div>
      </div>
      <div class="card card-warning p-4">
        <div class="icon-shape icon-md bg-warning text-white rounded-lg mb-3">⭐</div>
        <div class="text-xl font-bold text-gray-800">Premium</div>
        <div class="text-xs text-gray-500 mt-1">Current Plan</div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <!-- Subscription card -->
      <div class="card p-5">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-base font-semibold text-gray-800 mb-1">Premium Box</h3>
            <span class="badge badge-success">Active</span>
          </div>
          <span class="text-xl font-bold text-primary">$45/mo</span>
        </div>
        <div class="space-y-2 text-sm text-gray-600 mb-4">
          <div class="flex justify-between"><span>Next billing</span><span class="font-medium text-gray-800">July 1, 2026</span></div>
          <div class="flex justify-between"><span>Ships on</span><span class="font-medium text-gray-800">June 30, 2026</span></div>
          <div class="flex justify-between"><span>Member since</span><span class="font-medium text-gray-800">Oct 2024</span></div>
        </div>
        <div class="flex gap-2">
          <RouterLink to="/subscription" class="btn btn-primary btn-sm">Manage</RouterLink>
          <RouterLink to="/my-box" class="btn btn-outline btn-sm">View Box</RouterLink>
        </div>
      </div>

      <!-- Recent payments -->
      <div class="card">
        <div class="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
          <h3 class="text-sm font-semibold text-gray-800">Recent Payments</h3>
          <RouterLink to="/payment-history" class="text-xs text-primary hover:underline">View All</RouterLink>
        </div>
        <ul class="list-none p-0 m-0">
          <li v-for="p in payments" :key="p.id" class="list-item">
            <div class="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">💳</div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-800 mb-0">{{ p.plan }}</p>
              <p class="text-xs text-gray-400">{{ p.date }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-semibold text-gray-800">${{ p.amount }}</p>
              <span :class="p.status === 'Paid' ? 'badge-success' : 'badge-warning'" class="badge text-[10px]">{{ p.status }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const payments = [
  { id: 1, plan: 'Premium Box', date: 'Jun 1, 2026', amount: '45.00', status: 'Paid'    },
  { id: 2, plan: 'Premium Box', date: 'May 1, 2026', amount: '45.00', status: 'Paid'    },
  { id: 3, plan: 'Premium Box', date: 'Apr 1, 2026', amount: '45.00', status: 'Paid'    },
]
</script>
