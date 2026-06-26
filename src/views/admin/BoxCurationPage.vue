<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div><h1 class="text-2xl font-normal text-gray-800 mb-1">Box Curation</h1><p class="text-sm text-gray-500">Build the July 2026 box — lock when ready.</p></div>
      <button class="btn btn-primary">🔒 Lock Box</button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="lg:col-span-2 card p-5">
        <h3 class="text-sm font-semibold text-gray-800 mb-4">Product Slots ({{ products.length }}/14)</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div v-for="(p, i) in products" :key="i"
            class="border border-gray-100 rounded-lg p-3 flex items-center gap-3 hover:border-primary/30">
            <span class="text-2xl">{{ p.icon }}</span>
            <div class="flex-1 min-w-0">
              <p class="text-xs font-medium text-gray-800 truncate">{{ p.name }}</p>
              <p class="text-[10px] text-gray-400">{{ p.qty }} units</p>
            </div>
          </div>
          <!-- Empty slots -->
          <div v-for="i in (14 - products.length)" :key="'empty-' + i"
            class="border border-dashed border-gray-200 rounded-lg p-3 flex items-center justify-center text-gray-300 text-sm cursor-pointer hover:border-primary/30 hover:text-primary">
            + Add Product
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div class="card p-4">
          <h3 class="text-sm font-semibold text-gray-800 mb-3">Box Info</h3>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex justify-between"><span>Month</span><span class="font-medium text-gray-800">July 2026</span></div>
            <div class="flex justify-between"><span>Status</span><span class="badge badge-warning">Drafting</span></div>
            <div class="flex justify-between"><span>Products</span><span class="font-medium text-gray-800">{{ products.length }}/14</span></div>
            <div class="flex justify-between"><span>Lock by</span><span class="font-medium text-gray-800">Jun 28</span></div>
          </div>
        </div>
        <div class="card p-4">
          <h3 class="text-sm font-semibold text-gray-800 mb-2">Curator Notes</h3>
          <textarea class="form-input text-sm" rows="4" placeholder="Add notes about this month's theme…"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const products = [
  { icon:'🍵', name:'Jasmine Tea Sampler',  qty:1500 },
  { icon:'🍯', name:'Palm Sugar (250g)',     qty:1500 },
  { icon:'☕', name:'Robusta Coffee Blend', qty:1200 },
  { icon:'🌿', name:'Pandan Extract',       qty:1400 },
  { icon:'🍬', name:'Tamarind Candy Mix',   qty:1500 },
  { icon:'🥥', name:'Coconut Chips',        qty:1300 },
  { icon:'🫙', name:'Lemongrass Oil',       qty:800  },
  { icon:'🥭', name:'Dried Mango Slices',   qty:1200 },
]
</script>
