<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div><h1 class="text-2xl font-normal text-gray-800 mb-1">Coupons & Gifts</h1><p class="text-sm text-gray-500">Manage discount codes, referrals, and gift subscriptions.</p></div>
      <button class="btn btn-primary">+ Create Coupon</button>
    </div>

    <!-- Tabs -->
    <div class="flex gap-1 mb-4 bg-gray-100 p-1 rounded-lg w-fit">
      <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
        class="px-4 py-1.5 text-sm rounded-md transition-colors"
        :class="activeTab === tab ? 'bg-white text-gray-800 shadow-sm font-medium' : 'text-gray-500 hover:text-gray-700'">
        {{ tab }}
      </button>
    </div>

    <div class="card">
      <table class="data-table">
        <thead><tr><th>Code</th><th>Type</th><th>Discount</th><th>Used</th><th>Expires</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          <tr v-for="c in coupons" :key="c.code">
            <td><code class="text-primary font-mono font-bold">{{ c.code }}</code></td>
            <td class="text-gray-600">{{ c.type }}</td>
            <td class="font-semibold text-gray-800">{{ c.discount }}</td>
            <td class="text-gray-600">{{ c.used }} times</td>
            <td class="text-gray-500">{{ c.expires }}</td>
            <td><span :class="c.active ? 'badge-success' : 'badge-danger'" class="badge">{{ c.active ? 'Active' : 'Expired' }}</span></td>
            <td><button class="btn btn-outline btn-sm">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const tabs = ['Coupons', 'Referrals', 'Gift Subscriptions']
const activeTab = ref('Coupons')
const coupons = [
  { code:'WELCOME20', type:'Percent',  discount:'20% off',  used:156, expires:'Dec 31, 2026', active:true  },
  { code:'KHMER10',   type:'Percent',  discount:'10% off',  used:89,  expires:'Sep 30, 2026', active:true  },
  { code:'FIRSTBOX',  type:'Fixed',    discount:'$5 off',   used:432, expires:'Jun 30, 2026', active:false },
  { code:'GIFT2026',  type:'Gift',     discount:'1 free box',used:28, expires:'Dec 31, 2026', active:true  },
]
</script>
