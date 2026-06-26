<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-normal text-gray-800 mb-1">My Subscription</h1>
      <p class="text-sm text-gray-500">Manage your subscription, pause, skip, or cancel.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Current plan -->
      <div class="lg:col-span-2 card p-5 mb-4">
        <div class="flex justify-between items-start mb-5">
          <div>
            <h3 class="text-base font-semibold text-gray-800">Premium Box</h3>
            <p class="text-sm text-gray-500">Billed monthly · 14 products per box</p>
          </div>
          <div class="text-right">
            <span class="text-2xl font-bold text-primary">$45</span>
            <span class="text-gray-400 text-sm">/mo</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-5 text-sm">
          <div class="bg-gray-50 rounded-lg p-3">
            <div class="text-gray-400 text-xs mb-1">Status</div>
            <span class="badge badge-success">Active</span>
          </div>
          <div class="bg-gray-50 rounded-lg p-3">
            <div class="text-gray-400 text-xs mb-1">Next Billing</div>
            <div class="font-medium text-gray-800">July 1, 2026</div>
          </div>
          <div class="bg-gray-50 rounded-lg p-3">
            <div class="text-gray-400 text-xs mb-1">Next Shipment</div>
            <div class="font-medium text-gray-800">June 30, 2026</div>
          </div>
          <div class="bg-gray-50 rounded-lg p-3">
            <div class="text-gray-400 text-xs mb-1">Member Since</div>
            <div class="font-medium text-gray-800">October 2024</div>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="flex flex-wrap gap-3">
          <button class="btn btn-outline btn-sm">⏸ Pause Subscription</button>
          <button class="btn btn-outline btn-sm">⏭ Skip Next Box</button>
          <button class="btn btn-outline btn-sm">🔄 Change Plan</button>
          <button class="btn btn-sm text-danger border border-red-200 hover:bg-red-50">✕ Cancel</button>
        </div>
      </div>

      <!-- Upgrade card -->
      <div class="card p-5 border-2 border-primary/20">
        <div class="text-3xl mb-3">👑</div>
        <h3 class="text-sm font-semibold text-gray-800 mb-1">You're on Premium!</h3>
        <p class="text-xs text-gray-500 mb-4">You already have the best plan. Enjoy your exclusive monthly boxes.</p>
        <div class="space-y-2 text-xs text-gray-600">
          <div class="flex items-center gap-2"><span class="text-success">✓</span> 14 products/month</div>
          <div class="flex items-center gap-2"><span class="text-success">✓</span> Priority curation</div>
          <div class="flex items-center gap-2"><span class="text-success">✓</span> Free express shipping</div>
          <div class="flex items-center gap-2"><span class="text-success">✓</span> Gift wrapping</div>
        </div>
      </div>
    </div>
  </div>
</template>
