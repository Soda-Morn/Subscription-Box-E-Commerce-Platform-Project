<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div><h1 class="text-2xl font-normal text-gray-800 mb-1">Activity Log</h1><p class="text-sm text-gray-500">System-wide activity and audit trail.</p></div>
      <button class="btn btn-outline btn-sm">Export CSV</button>
    </div>
    <div class="card">
      <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
        <input class="form-input max-w-xs" placeholder="Search logs…" />
        <select class="form-select"><option>All Actions</option><option>Login</option><option>Payment</option><option>Subscription</option></select>
      </div>
      <table class="data-table">
        <thead><tr><th>Time</th><th>User</th><th>Action</th><th>Description</th><th>IP</th></tr></thead>
        <tbody>
          <tr v-for="log in logs" :key="log.id">
            <td class="text-gray-400 text-xs whitespace-nowrap">{{ log.time }}</td>
            <td class="font-medium text-gray-800">{{ log.user }}</td>
            <td><span :class="actionClass(log.action)" class="badge text-[10px]">{{ log.action }}</span></td>
            <td class="text-gray-600 text-sm">{{ log.desc }}</td>
            <td class="text-gray-400 text-xs font-mono">{{ log.ip }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const logs = [
  { id:1, time:'Jun 22, 11:02', user:'Admin User',  action:'Login',        desc:'Logged in from Chrome',          ip:'192.168.1.1' },
  { id:2, time:'Jun 22, 10:45', user:'Sarah Chen',  action:'Payment',      desc:'Paid $45 for Premium Box',        ip:'10.0.0.5'    },
  { id:3, time:'Jun 22, 10:30', user:'Admin User',  action:'Box Locked',   desc:'July 2026 box locked for shipping',ip:'192.168.1.1' },
  { id:4, time:'Jun 22, 09:15', user:'John Doe',    action:'Subscription', desc:'Paused Standard Box subscription', ip:'10.0.0.8'    },
  { id:5, time:'Jun 21, 16:00', user:'Maria Lopez', action:'Login',        desc:'Logged in from Firefox',          ip:'10.0.0.12'   },
  { id:6, time:'Jun 21, 15:30', user:'Admin User',  action:'Refund',       desc:'Issued $29 refund to Tom Wilson', ip:'192.168.1.1' },
]
function actionClass(a) {
  return { Login:'badge-primary', Payment:'badge-success', 'Box Locked':'badge-info', Subscription:'badge-warning', Refund:'badge-danger' }[a] || 'badge-primary'
}
</script>
