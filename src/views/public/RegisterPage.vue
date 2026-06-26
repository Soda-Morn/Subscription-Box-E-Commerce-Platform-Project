<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <div class="w-full max-w-md">

      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">M</div>
        <h1 class="text-xl font-semibold text-gray-800">Create your account</h1>
        <p class="text-sm text-gray-500 mt-1">Start your Cambodian subscription box journey</p>
      </div>

      <div class="card p-6">
        <form @submit.prevent="handleRegister" class="space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First name</label>
              <input type="text" class="form-input" placeholder="Sarah" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last name</label>
              <input type="text" class="form-input" placeholder="Chen" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input type="email" class="form-input" placeholder="you@example.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" class="form-input" placeholder="At least 8 characters" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Choose a plan</label>
            <select class="form-input">
              <option>Basic Box — $15/mo</option>
              <option>Standard Box — $29/mo</option>
              <option>Premium Box — $45/mo</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary w-full justify-center">
            Create Account
          </button>
        </form>

        <p class="text-center text-sm text-gray-500 mt-4">
          Already have an account?
          <RouterLink to="/login" class="text-primary hover:underline">Sign in</RouterLink>
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

function handleRegister() {
  // TODO: call POST /api/register
  router.push('/login')
}
</script>
