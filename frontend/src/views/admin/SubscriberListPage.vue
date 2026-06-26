<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-normal text-gray-800 mb-1">Subscribers</h1>
        <p class="text-sm text-gray-500">Manage all 1,284 active subscribers.</p>
      </div>
      <button class="btn btn-primary">+ Add Subscriber</button>
    </div>

    <div class="card">
      <!-- Filters -->
      <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
        <input type="text" class="form-input max-w-xs" placeholder="Search by name or email…" />
        <select class="form-select">
          <option>All Status</option>
          <option>Active</option>
          <option>Paused</option>
          <option>Cancelled</option>
        </select>
        <select class="form-select">
          <option>All Plans</option>
          <option>Premium</option>
          <option>Standard</option>
          <option>Basic</option>
        </select>
      </div>

      <table class="data-table">
        <thead>
          <tr>
            <th>Subscriber</th>
            <th>Plan</th>
            <th>Status</th>
            <th>Since</th>
            <th>Next Billing</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in subscribers" :key="s.id">
            <td>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">{{ s.initials }}</div>
                <div>
                  <div class="font-medium text-gray-800">{{ s.name }}</div>
                  <div class="text-xs text-gray-400">{{ s.email }}</div>
                </div>
              </div>
            </td>
            <td>{{ s.plan }}</td>
            <td><span :class="statusClass(s.status)" class="badge">{{ s.status }}</span></td>
            <td class="text-gray-500">{{ s.since }}</td>
            <td class="text-gray-500">{{ s.nextBilling }}</td>
            <td>
              <button class="btn btn-outline btn-sm">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const subscribers = [
  { id:1, initials:'SC', name:'Sarah Chen',    email:'sarah@email.com',  plan:'Premium',  status:'Active',    since:'Oct 2024', nextBilling:'Jul 1, 2026' },
  { id:2, initials:'JD', name:'John Doe',      email:'john@email.com',   plan:'Standard', status:'Paused',    since:'Jan 2025', nextBilling:'—'           },
  { id:3, initials:'ML', name:'Maria Lopez',   email:'maria@email.com',  plan:'Basic',    status:'Active',    since:'Mar 2025', nextBilling:'Jul 1, 2026' },
  { id:4, initials:'AK', name:'Alex Kim',      email:'alex@email.com',   plan:'Premium',  status:'Active',    since:'Nov 2024', nextBilling:'Jul 1, 2026' },
  { id:5, initials:'PN', name:'Priya Nair',    email:'priya@email.com',  plan:'Gift',     status:'Active',    since:'May 2026', nextBilling:'Jul 5, 2026' },
  { id:6, initials:'TW', name:'Tom Wilson',    email:'tom@email.com',    plan:'Standard', status:'Cancelled', since:'Dec 2024', nextBilling:'—'           },
]

function statusClass(status) {
  return { Active: 'badge-success', Paused: 'badge-warning', Cancelled: 'badge-danger' }[status] || 'badge-primary'
}
</script>
