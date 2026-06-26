<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <div><h1 class="text-2xl font-normal text-gray-800 mb-1">Inventory</h1><p class="text-sm text-gray-500">Track stock levels for all products.</p></div>
      <button class="btn btn-primary">+ Add Product</button>
    </div>
    <div class="card">
      <div class="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
        <input class="form-input max-w-xs" placeholder="Search products…" />
        <select class="form-select"><option>All Status</option><option>In Stock</option><option>Low Stock</option><option>Out of Stock</option></select>
      </div>
      <table class="data-table">
        <thead><tr><th>Product</th><th>SKU</th><th>Category</th><th>Stock</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          <tr v-for="p in products" :key="p.sku">
            <td><div class="flex items-center gap-3"><span class="text-2xl">{{ p.icon }}</span><span class="font-medium text-gray-800">{{ p.name }}</span></div></td>
            <td class="text-gray-400 text-xs font-mono">{{ p.sku }}</td>
            <td class="text-gray-600">{{ p.category }}</td>
            <td class="font-semibold" :class="p.stock <= 10 ? 'text-danger' : p.stock <= 25 ? 'text-warning' : 'text-gray-800'">{{ p.stock }}</td>
            <td>
              <span :class="p.stock === 0 ? 'badge-danger' : p.stock <= 10 ? 'badge-danger' : p.stock <= 25 ? 'badge-warning' : 'badge-success'" class="badge">
                {{ p.stock === 0 ? 'Out of Stock' : p.stock <= 10 ? 'Critical' : p.stock <= 25 ? 'Low Stock' : 'In Stock' }}
              </span>
            </td>
            <td><div class="flex gap-2"><button class="btn btn-outline btn-sm">Edit</button><button class="btn btn-outline btn-sm">Reorder</button></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
const products = [
  { icon:'🍵', name:'Jasmine Tea Sampler',  sku:'#554433', category:'Beverages', stock:5   },
  { icon:'🍯', name:'Cambodian Palm Sugar', sku:'#887766', category:'Sweeteners', stock:8  },
  { icon:'☕', name:'Organic Coffee Beans', sku:'#332211', category:'Beverages', stock:14  },
  { icon:'🌿', name:'Pandan Leaf Extract',  sku:'#998877', category:'Extracts',  stock:19  },
  { icon:'🍬', name:'Tamarind Candy Mix',   sku:'#665544', category:'Snacks',    stock:22  },
  { icon:'🥥', name:'Coconut Chips 80g',    sku:'#112233', category:'Snacks',    stock:120 },
  { icon:'🫙', name:'Lemongrass Oil 50ml',  sku:'#445566', category:'Wellness',  stock:67  },
  { icon:'🥭', name:'Dried Mango 200g',     sku:'#778899', category:'Snacks',    stock:95  },
]
</script>
