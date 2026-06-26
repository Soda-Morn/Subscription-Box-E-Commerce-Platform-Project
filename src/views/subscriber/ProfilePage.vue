<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl font-normal text-gray-800 mb-1">My Profile</h1>
      <p class="text-sm text-gray-500">Update your personal information and box preferences.</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="lg:col-span-2 space-y-4">
        <!-- Personal info -->
        <div class="card p-5">
          <h3 class="text-sm font-semibold text-gray-800 mb-4">Personal Information</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First name</label>
              <input type="text" class="form-input" value="Sarah" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input type="text" class="form-input" value="Chen" />
            </div>
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" class="form-input" value="sarah.chen@email.com" />
            </div>
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Shipping address</label>
              <input type="text" class="form-input" placeholder="123 Main St, Phnom Penh" />
            </div>
          </div>
          <button class="btn btn-primary mt-4">Save Changes</button>
        </div>

        <!-- Preferences -->
        <div class="card p-5">
          <h3 class="text-sm font-semibold text-gray-800 mb-4">Box Preferences</h3>
          <div class="space-y-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Dietary restrictions</label>
              <div class="flex flex-wrap gap-2">
                <label v-for="option in dietOptions" :key="option" class="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" class="rounded border-gray-300 text-primary" />
                  {{ option }}
                </label>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Preferred style</label>
              <select class="form-input max-w-xs">
                <option>Traditional Cambodian</option>
                <option>Modern Fusion</option>
                <option>Health & Wellness</option>
              </select>
            </div>
          </div>
          <button class="btn btn-outline mt-4">Update Preferences</button>
        </div>
      </div>

      <!-- Avatar card -->
      <div class="card p-5 text-center">
        <div class="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-3">
          SC
        </div>
        <h3 class="text-sm font-semibold text-gray-800">Sarah Chen</h3>
        <p class="text-xs text-gray-400 mb-3">Premium Subscriber</p>
        <span class="badge badge-success mb-4 block w-fit mx-auto">Active</span>
        <p class="text-xs text-gray-400">Member since Oct 2024</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const dietOptions = ['No Nuts', 'Vegan', 'Gluten Free', 'No Seafood', 'No Spicy']
</script>
