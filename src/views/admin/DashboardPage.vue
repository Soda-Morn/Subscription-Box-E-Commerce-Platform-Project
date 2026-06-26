<template>
  <div>

    <!-- ── Page header ─────────────────────────────────────────────────── -->
    <div class="mb-6">
      <h1 class="text-2xl font-normal text-gray-800 mb-1">Dashboard</h1>
      <p class="text-gray-500 text-sm">Welcome back! Here's what's happening with your subscriptions.</p>
    </div>

    <!-- ── Row 1: 4 KPI stat cards (colored bg — exact InApp pattern) ─── -->
    <!--
      InApp HTML:
        class="card p-4 bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded-2"
        Inside: icon-shape icon-md bg-primary text-white rounded-2 + text
    -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

      <!-- Total Revenue — primary (deep red) -->
      <div class="card card-primary p-4">
        <div class="flex gap-3">
          <div class="icon-shape icon-md bg-primary text-white rounded-lg">
            💰
          </div>
          <div>
            <h2 class="text-sm font-normal text-gray-600 mb-2">Total Revenue</h2>
            <h3 class="text-xl font-bold text-gray-800 mb-0">$24,580</h3>
            <p class="text-primary text-xs mt-1 mb-0">+12.5% since last month</p>
          </div>
        </div>
      </div>

      <!-- Active Subscribers — success (green) -->
      <div class="card card-success p-4">
        <div class="flex gap-3">
          <div class="icon-shape icon-md bg-success text-white rounded-lg">
            👥
          </div>
          <div>
            <h2 class="text-sm font-normal text-gray-600 mb-2">Active Subscribers</h2>
            <h3 class="text-xl font-bold text-gray-800 mb-0">1,284</h3>
            <p class="text-success text-xs mt-1 mb-0">+8.3% since last month</p>
          </div>
        </div>
      </div>

      <!-- Boxes Shipped — info (cyan) -->
      <div class="card card-info p-4">
        <div class="flex gap-3">
          <div class="icon-shape icon-md bg-info text-white rounded-lg">
            📦
          </div>
          <div>
            <h2 class="text-sm font-normal text-gray-600 mb-2">Boxes Shipped</h2>
            <h3 class="text-xl font-bold text-gray-800 mb-0">1,193</h3>
            <p class="text-info text-xs mt-1 mb-0">+5.1% since last month</p>
          </div>
        </div>
      </div>

      <!-- Churn Rate — warning (gold) -->
      <div class="card card-warning p-4">
        <div class="flex gap-3">
          <div class="icon-shape icon-md bg-warning text-white rounded-lg">
            📉
          </div>
          <div>
            <h2 class="text-sm font-normal text-gray-600 mb-2">Churn Rate</h2>
            <h3 class="text-xl font-bold text-gray-800 mb-0">3.2%</h3>
            <p class="text-warning text-xs mt-1 mb-0">↓ 0.8% improvement</p>
          </div>
        </div>
      </div>

    </div>

    <!-- ── Row 2: 3 secondary metric cards (white, big number left, icon right) -->
    <!--
      InApp HTML (col-lg-4 each):
        card > card-body p-4
          d-flex justify-content-between border-bottom pb-5 mb-3
            div: h3 (big number) + span (label)
            div: icon (large, faded)
          d-flex justify-content-between align-items-center small
            div: text-success +35% vs Last Month
            div: View link
    -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

      <!-- MRR -->
      <div class="card">
        <div class="p-4">
          <div class="flex justify-between border-b border-gray-100 pb-4 mb-3">
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-1">$8,193</h3>
              <span class="text-sm text-gray-500">Monthly Recurring Revenue</span>
            </div>
            <div>
              <span class="text-5xl opacity-10">💵</span>
            </div>
          </div>
          <div class="flex justify-between items-center text-sm">
            <div class="text-gray-500">
              <span class="text-success font-medium">+9.4%</span> vs Last Month
            </div>
            <div>
              <a href="#" class="text-primary hover:underline text-sm">View</a>
            </div>
          </div>
        </div>
      </div>

      <!-- New Sign-ups -->
      <div class="card">
        <div class="p-4">
          <div class="flex justify-between border-b border-gray-100 pb-4 mb-3">
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-1">146</h3>
              <span class="text-sm text-gray-500">New Sign-ups This Month</span>
            </div>
            <div>
              <span class="text-5xl opacity-10">🆕</span>
            </div>
          </div>
          <div class="flex justify-between items-center text-sm">
            <div class="text-gray-500">
              <span class="text-success font-medium">+21.0%</span> vs Last Month
            </div>
            <div>
              <RouterLink to="/admin/subscribers" class="text-primary hover:underline text-sm">View</RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Failed Payments -->
      <div class="card">
        <div class="p-4">
          <div class="flex justify-between border-b border-gray-100 pb-4 mb-3">
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-1">12</h3>
              <span class="text-sm text-gray-500">Failed Payments</span>
            </div>
            <div>
              <span class="text-5xl opacity-10">⚠️</span>
            </div>
          </div>
          <div class="flex justify-between items-center text-sm">
            <div class="text-gray-500">
              <span class="text-danger font-medium">+2 more</span> vs Last Month
            </div>
            <div>
              <RouterLink to="/admin/billing" class="text-primary hover:underline text-sm">Retry All</RouterLink>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- ── Row 3: 2 chart cards (Sales vs Subs + Overall Info) ────────── -->
    <!--
      InApp HTML:
        col-12 col-lg-6 each
        card > card-header (title + select) > card-body
    -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">

      <!-- Revenue vs Subscriptions bar chart -->
      <div class="card">
        <div class="flex justify-between items-center border-b border-gray-100 px-4 py-3">
          <h3 class="text-base font-medium text-gray-800 mb-0">Revenue vs Subscriptions</h3>
          <select class="form-select">
            <option>This Year</option>
            <option>Last Year</option>
          </select>
        </div>
        <div class="p-4">
          <!-- CSS bar chart (no library) -->
          <div class="flex items-end gap-1.5 h-36 pb-5 relative">
            <div
              v-for="month in chartData"
              :key="month.label"
              class="flex-1 flex flex-col items-center relative"
            >
              <div class="flex gap-0.5 items-end h-full w-full">
                <!-- Revenue bar -->
                <div
                  class="flex-1 bg-primary rounded-t min-h-[4px] opacity-85"
                  :style="{ height: month.revenue + '%' }"
                ></div>
                <!-- Subscriptions bar -->
                <div
                  class="flex-1 bg-warning rounded-t min-h-[4px] opacity-85"
                  :style="{ height: month.subs + '%' }"
                ></div>
              </div>
              <span class="absolute bottom-[-20px] text-[9px] text-gray-400">{{ month.label }}</span>
            </div>
          </div>
          <!-- Legend -->
          <div class="flex gap-4 mt-2">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 bg-primary rounded-sm inline-block"></span>
              <span class="text-xs text-gray-500">Revenue</span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 bg-warning rounded-sm inline-block"></span>
              <span class="text-xs text-gray-500">Subscriptions</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Overall Information — subscriber breakdown -->
      <div class="card">
        <div class="flex justify-between items-center border-b border-gray-100 px-4 py-3">
          <h3 class="text-base font-medium text-gray-800 mb-0">Overall Information</h3>
          <select class="form-select">
            <option>Last 6 Months</option>
            <option>This Month</option>
          </select>
        </div>
        <div class="p-4">
          <h4 class="text-sm font-medium text-gray-700 mb-3">Subscriber Overview</h4>

          <!-- Two donut-style numbers side by side -->
          <div class="flex mb-4">
            <div class="flex-1 text-center border-r border-gray-100">
              <h2 class="text-xl font-bold text-gray-800 mb-1">925</h2>
              <p class="text-success text-xs mb-2">Active</p>
              <span class="badge badge-success">↑ 8.3%</span>
            </div>
            <div class="flex-1 text-center">
              <h2 class="text-xl font-bold text-gray-800 mb-1">180</h2>
              <p class="text-warning text-xs mb-2">Paused</p>
              <span class="badge badge-warning">14%</span>
            </div>
          </div>

          <!-- Three stats at the bottom (border-top) -->
          <div class="flex text-center border-t border-gray-100 pt-4">
            <div class="flex-1 border-r border-gray-100">
              <h3 class="text-lg font-bold text-gray-800 mb-1">1,284</h3>
              <small class="text-gray-500">Total</small>
            </div>
            <div class="flex-1 border-r border-gray-100">
              <h3 class="text-lg font-bold text-gray-800 mb-1">115</h3>
              <small class="text-gray-500">Cancelled</small>
            </div>
            <div class="flex-1">
              <h3 class="text-lg font-bold text-gray-800 mb-1">64</h3>
              <small class="text-gray-500">Gifted</small>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- ── Row 4: 3 list cards (like InApp's last row) ──────────────── -->
    <!--
      InApp HTML:
        col-lg-4 each
        card h-100 > card-header > ul.list-group.list-group-flush
          li.list-group-item: img + content + badge
    -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">

      <!-- Top Subscribed Plans (= "Top Selling Products" in InApp) -->
      <div class="card">
        <div class="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-white rounded-t-lg">
          <h4 class="text-sm font-semibold text-gray-800 mb-0">Top Subscribed Plans</h4>
          <RouterLink to="/admin/plans" class="text-xs text-primary hover:underline">View All</RouterLink>
        </div>
        <ul class="list-none p-0 m-0">
          <li v-for="plan in topPlans" :key="plan.name" class="list-item">
            <!-- Icon box (replaces product image in InApp) -->
            <div class="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
              :style="{ background: plan.bg }">
              {{ plan.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-800 mb-0.5">{{ plan.name }}</p>
              <div class="flex items-center gap-1 text-gray-400">
                <small class="font-semibold">${{ plan.price }}/mo</small>
                <small>•</small>
                <small>{{ plan.count }} subs</small>
              </div>
            </div>
            <!-- Percentage badge like InApp -->
            <span :class="plan.badgeClass" class="badge">{{ plan.pct }}%</span>
          </li>
        </ul>
      </div>

      <!-- Low Stock Products (same structure as InApp) -->
      <div class="card">
        <div class="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-white rounded-t-lg">
          <h4 class="text-sm font-semibold text-gray-800 mb-0">Low Stock Products</h4>
          <RouterLink to="/admin/inventory" class="text-xs text-primary hover:underline">View All</RouterLink>
        </div>
        <ul class="list-none p-0 m-0">
          <li v-for="product in lowStock" :key="product.name" class="list-item">
            <div class="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-2xl flex-shrink-0">
              {{ product.icon }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-800 mb-0.5">{{ product.name }}</p>
              <small class="text-gray-400">ID: {{ product.id }}</small>
            </div>
            <div class="flex flex-col items-center gap-0">
              <span class="font-semibold text-primary">{{ String(product.stock).padStart(2, '0') }}</span>
              <small class="text-gray-400">In Stock</small>
            </div>
          </li>
        </ul>
      </div>

      <!-- Recent Payments (= "Recent Sales" in InApp) -->
      <div class="card">
        <div class="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-white rounded-t-lg">
          <h4 class="text-sm font-semibold text-gray-800 mb-0">Recent Payments</h4>
          <RouterLink to="/admin/billing" class="text-xs text-primary hover:underline">View All</RouterLink>
        </div>
        <ul class="list-none p-0 m-0">
          <li v-for="payment in recentPayments" :key="payment.id" class="list-item">
            <!-- Avatar (initials circle) -->
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
              {{ payment.initials }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-800 mb-0.5">{{ payment.name }}</p>
              <div class="flex items-center gap-1 text-gray-400">
                <small class="font-semibold">{{ payment.plan }}</small>
                <small>•</small>
                <small>${{ payment.amount }}</small>
              </div>
            </div>
            <!-- Status badge — same as InApp "Completed / Processing / Pending / Cancelled" -->
            <span :class="statusBadge(payment.status)" class="badge">{{ payment.status }}</span>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// ── All data is static (TODO: replace with API calls when backend is ready) ──

// Monthly bar chart — height % (100 = tallest bar)
const chartData = [
  { label: 'Jan', revenue: 55, subs: 45 },
  { label: 'Feb', revenue: 60, subs: 50 },
  { label: 'Mar', revenue: 72, subs: 65 },
  { label: 'Apr', revenue: 68, subs: 60 },
  { label: 'May', revenue: 80, subs: 70 },
  { label: 'Jun', revenue: 90, subs: 78 },
  { label: 'Jul', revenue: 85, subs: 72 },
  { label: 'Aug', revenue: 95, subs: 80 },
  { label: 'Sep', revenue: 88, subs: 75 },
  { label: 'Oct', revenue: 100, subs: 88 },
  { label: 'Nov', revenue: 92, subs: 82 },
  { label: 'Dec', revenue: 98, subs: 90 },
]

// Top subscription plans (like InApp's "Top Selling Products")
const topPlans = [
  { name: 'Premium Box',  icon: '👑', bg: '#fef9ec', price: 45, count: 512, pct: 40, badgeClass: 'badge-danger'  },
  { name: 'Standard Box', icon: '📦', bg: '#f0fdf4', price: 29, count: 387, pct: 30, badgeClass: 'badge-primary' },
  { name: 'Basic Box',    icon: '🌱', bg: '#f0f9ff', price: 15, count: 261, pct: 20, badgeClass: 'badge-info'    },
  { name: 'Gift Box',     icon: '🎁', bg: '#fef2f2', price: 39, count: 124, pct: 10, badgeClass: 'badge-success' },
]

// Low stock products (same structure as InApp)
const lowStock = [
  { name: 'Jasmine Tea Sampler',  icon: '🍵', id: '#554433', stock:  5 },
  { name: 'Cambodian Palm Sugar', icon: '🍯', id: '#887766', stock:  8 },
  { name: 'Organic Coffee Beans', icon: '☕', id: '#332211', stock: 14 },
  { name: 'Pandan Leaf Extract',  icon: '🌿', id: '#998877', stock: 19 },
  { name: 'Tamarind Candy Mix',   icon: '🍬', id: '#665544', stock: 22 },
]

// Recent payments (like InApp's "Recent Sales")
const recentPayments = [
  { id: 1, initials: 'SC', name: 'Sarah Chen',  plan: 'Premium Box',  amount: '45.00', status: 'Completed'  },
  { id: 2, initials: 'JD', name: 'John Doe',    plan: 'Standard Box', amount: '29.00', status: 'Failed'      },
  { id: 3, initials: 'ML', name: 'Maria Lopez', plan: 'Basic Box',    amount: '15.00', status: 'Completed'   },
  { id: 4, initials: 'AK', name: 'Alex Kim',    plan: 'Premium Box',  amount: '45.00', status: 'Processing'  },
  { id: 5, initials: 'PN', name: 'Priya Nair',  plan: 'Gift Box',     amount: '39.00', status: 'Pending'     },
]

// Map status string to badge CSS class (same as InApp's subtle badge pattern)
function statusBadge(status) {
  const map = {
    Completed:  'badge-success',
    Failed:     'badge-danger',
    Processing: 'badge-primary',
    Pending:    'badge-warning',
    Refunded:   'badge-info',
  }
  return map[status] || 'badge-primary'
}
</script>
