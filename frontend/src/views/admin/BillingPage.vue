<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div><h1 class="text-2xl font-normal text-gray-800 mb-1">Billing</h1><p class="text-sm text-gray-500">Manage all payments and transactions.</p></div>
      <button class="btn btn-primary">Retry All Failed</button>
    </div>

    <!-- Tabs -->
    <div class="flex gap-1 mb-4 bg-gray-100 p-1 rounded-lg w-fit">
      <button v-for="tab in tabs" :key="tab"
        @click="activeTab = tab"
        class="px-4 py-1.5 text-sm rounded-md transition-colors"
        :class="activeTab === tab ? 'bg-white text-gray-800 shadow-sm font-medium' : 'text-gray-500 hover:text-gray-700'">
        {{ tab }}
      </button>
    </div>

    <div class="card">
      <table class="data-table">
        <thead><tr><th>Subscriber</th><th>Plan</th><th>Amount</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          <tr v-for="p in filteredPayments" :key="p.id">
            <td>
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center">{{ p.initials }}</div>
                <span class="font-medium text-gray-800">{{ p.name }}</span>
              </div>
            </td>
            <td class="text-gray-600">{{ p.plan }}</td>
            <td class="font-semibold text-gray-800">${{ p.amount }}</td>
            <td class="text-gray-500">{{ p.date }}</td>
            <td><span :class="statusClass(p.status)" class="badge">{{ p.status }}</span></td>
            <td>
              <button v-if="p.status === 'Failed'" class="btn btn-outline btn-sm text-primary">Retry</button>
              <button v-else class="btn btn-outline btn-sm">Receipt</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const tabs = ['All Payments', 'Failed', 'Refunds']
const activeTab = ref('All Payments')

const payments = [
  { id:1, initials:'SC', name:'Sarah Chen',  plan:'Premium',  amount:'45.00', date:'Jun 1, 2026', status:'Completed' },
  { id:2, initials:'JD', name:'John Doe',    plan:'Standard', amount:'29.00', date:'Jun 1, 2026', status:'Failed'    },
  { id:3, initials:'ML', name:'Maria Lopez', plan:'Basic',    amount:'15.00', date:'Jun 1, 2026', status:'Completed' },
  { id:4, initials:'AK', name:'Alex Kim',    plan:'Premium',  amount:'45.00', date:'Jun 1, 2026', status:'Processing'},
  { id:5, initials:'PN', name:'Priya Nair',  plan:'Gift',     amount:'39.00', date:'Jun 1, 2026', status:'Completed' },
  { id:6, initials:'TW', name:'Tom Wilson',  plan:'Standard', amount:'29.00', date:'Jun 1, 2026', status:'Failed'    },
]

const filteredPayments = computed(() => {
  if (activeTab.value === 'Failed')   return payments.filter(p => p.status === 'Failed')
  if (activeTab.value === 'Refunds')  return payments.filter(p => p.status === 'Refunded')
  return payments
})

function statusClass(s) {
  return { Completed:'badge-success', Failed:'badge-danger', Processing:'badge-primary', Refunded:'badge-info' }[s] || 'badge-primary'
}
</script>
