<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-normal text-gray-800 mb-1">Payment History</h1>
      <p class="text-sm text-gray-500">All your past transactions.</p>
    </div>

    <div class="card">
      <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
        <select class="form-select">
          <option>All Months</option>
          <option>June 2026</option>
          <option>May 2026</option>
          <option>April 2026</option>
        </select>
        <select class="form-select">
          <option>All Status</option>
          <option>Paid</option>
          <option>Failed</option>
        </select>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in payments" :key="p.id">
            <td class="text-gray-500">{{ p.date }}</td>
            <td class="font-medium text-gray-800">{{ p.desc }}</td>
            <td class="font-semibold text-gray-800">${{ p.amount }}</td>
            <td><span :class="p.status === 'Paid' ? 'badge badge-success' : 'badge badge-danger'">{{ p.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const payments = [
  { id: 1, date: 'Jun 1, 2026', desc: 'Premium Box — Monthly',  amount: '45.00', status: 'Paid'   },
  { id: 2, date: 'May 1, 2026', desc: 'Premium Box — Monthly',  amount: '45.00', status: 'Paid'   },
  { id: 3, date: 'Apr 1, 2026', desc: 'Premium Box — Monthly',  amount: '45.00', status: 'Paid'   },
  { id: 4, date: 'Mar 1, 2026', desc: 'Premium Box — Monthly',  amount: '45.00', status: 'Paid'   },
  { id: 5, date: 'Feb 1, 2026', desc: 'Standard Box — Monthly', amount: '29.00', status: 'Failed' },
  { id: 6, date: 'Jan 1, 2026', desc: 'Standard Box — Monthly', amount: '29.00', status: 'Paid'   },
]
</script>
