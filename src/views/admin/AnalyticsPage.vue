<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div><h1 class="text-2xl font-normal text-gray-800 mb-1">Analytics</h1><p class="text-sm text-gray-500">Business performance and churn insights.</p></div>
      <select class="form-select"><option>Last 6 Months</option><option>This Year</option></select>
    </div>

    <!-- 4 stat cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div class="card card-primary p-4">
        <div class="icon-shape icon-md bg-primary text-white rounded-lg mb-3">📈</div>
        <div class="text-xl font-bold text-gray-800">$24,580</div>
        <div class="text-xs text-gray-500 mt-1">Total Revenue</div>
        <div class="text-xs text-success mt-1">↑ 12.5%</div>
      </div>
      <div class="card card-success p-4">
        <div class="icon-shape icon-md bg-success text-white rounded-lg mb-3">👥</div>
        <div class="text-xl font-bold text-gray-800">1,284</div>
        <div class="text-xs text-gray-500 mt-1">Total Subscribers</div>
        <div class="text-xs text-success mt-1">↑ 8.3%</div>
      </div>
      <div class="card card-info p-4">
        <div class="icon-shape icon-md bg-info text-white rounded-lg mb-3">💰</div>
        <div class="text-xl font-bold text-gray-800">$8,193</div>
        <div class="text-xs text-gray-500 mt-1">MRR</div>
        <div class="text-xs text-success mt-1">↑ 9.4%</div>
      </div>
      <div class="card card-warning p-4">
        <div class="icon-shape icon-md bg-warning text-white rounded-lg mb-3">📉</div>
        <div class="text-xl font-bold text-gray-800">3.2%</div>
        <div class="text-xs text-gray-500 mt-1">Churn Rate</div>
        <div class="text-xs text-success mt-1">↓ 0.8%</div>
      </div>
    </div>

    <!-- Monthly growth table -->
    <div class="card">
      <div class="px-4 py-3 border-b border-gray-100">
        <h3 class="text-sm font-semibold text-gray-800">Monthly Growth</h3>
      </div>
      <table class="data-table">
        <thead><tr><th>Month</th><th>New Subscribers</th><th>Churned</th><th>Net Growth</th><th>Revenue</th></tr></thead>
        <tbody>
          <tr v-for="m in monthly" :key="m.month">
            <td class="font-medium text-gray-800">{{ m.month }}</td>
            <td class="text-success font-medium">+{{ m.new }}</td>
            <td class="text-danger font-medium">-{{ m.churned }}</td>
            <td><span :class="m.net > 0 ? 'text-success' : 'text-danger'" class="font-semibold">{{ m.net > 0 ? '+' : '' }}{{ m.net }}</span></td>
            <td class="font-semibold text-gray-800">${{ m.revenue.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const monthly = [
  { month:'Jan 2026', new:98,  churned:12, net:86,  revenue:19200 },
  { month:'Feb 2026', new:112, churned:15, net:97,  revenue:20580 },
  { month:'Mar 2026', new:89,  churned:18, net:71,  revenue:19800 },
  { month:'Apr 2026', new:134, churned:10, net:124, revenue:22400 },
  { month:'May 2026', new:121, churned:13, net:108, revenue:23100 },
  { month:'Jun 2026', new:146, churned:11, net:135, revenue:24580 },
]
</script>
