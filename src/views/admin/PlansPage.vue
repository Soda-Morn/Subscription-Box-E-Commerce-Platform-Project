<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div><h1 class="text-2xl font-normal text-gray-800 mb-1">Subscription Plans</h1><p class="text-sm text-gray-500">Manage your product offering.</p></div>
      <button class="btn btn-primary">+ New Plan</button>
    </div>
    <div class="card">
      <table class="data-table">
        <thead><tr><th>Plan Name</th><th>Price</th><th>Items/Box</th><th>Subscribers</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          <tr v-for="p in plans" :key="p.name">
            <td><div class="flex items-center gap-2"><span class="text-xl">{{ p.icon }}</span><span class="font-medium text-gray-800">{{ p.name }}</span></div></td>
            <td class="font-semibold text-gray-800">${{ p.price }}/mo</td>
            <td class="text-gray-600">{{ p.items }}</td>
            <td class="text-gray-600">{{ p.subs }}</td>
            <td><span class="badge badge-success">Active</span></td>
            <td><div class="flex gap-2"><button class="btn btn-outline btn-sm">Edit</button><button class="btn btn-sm text-danger border border-red-200">Delete</button></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const plans = [
  { icon:'🌱', name:'Basic Box',    price:15, items:4,  subs:261 },
  { icon:'📦', name:'Standard Box', price:29, items:8,  subs:387 },
  { icon:'👑', name:'Premium Box',  price:45, items:14, subs:512 },
  { icon:'🎁', name:'Gift Box',     price:39, items:10, subs:124 },
]
</script>
