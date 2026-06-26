<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div><h1 class="text-2xl font-normal text-gray-800 mb-1">Roles & Permissions</h1><p class="text-sm text-gray-500">Control what each role can access.</p></div>
      <button class="btn btn-primary">+ New Role</button>
    </div>
    <div class="card">
      <table class="data-table">
        <thead><tr><th>Role</th><th>Description</th><th>Users</th><th>Permissions</th><th>Actions</th></tr></thead>
        <tbody>
          <tr v-for="r in roles" :key="r.name">
            <td><span class="badge badge-primary">{{ r.name }}</span></td>
            <td class="text-gray-600">{{ r.desc }}</td>
            <td class="text-gray-600">{{ r.users }}</td>
            <td><div class="flex flex-wrap gap-1">
              <span v-for="p in r.perms" :key="p" class="badge badge-info text-[10px]">{{ p }}</span>
            </div></td>
            <td><button class="btn btn-outline btn-sm">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const roles = [
  { name:'Admin',             desc:'Full system access',               users:2,   perms:['All'] },
  { name:'Curation Manager',  desc:'Manage box contents',              users:3,   perms:['Box Curation','Inventory'] },
  { name:'Billing Manager',   desc:'Manage payments and billing',      users:2,   perms:['Billing','Reports'] },
  { name:'Subscriber',        desc:'Regular subscriber access',        users:1284, perms:['My Box','My Profile','Billing'] },
  { name:'Gift Recipient',    desc:'Gifted subscription access',       users:64,  perms:['My Box'] },
]
</script>
