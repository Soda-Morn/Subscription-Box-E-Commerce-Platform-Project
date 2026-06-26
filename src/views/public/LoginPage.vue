<template>
  <!--
    LoginPage — split layout (like InApp signin.html)
    Left: decorative panel with gradient + features
    Right: login form + demo quick-login buttons
  -->
  <div class="min-h-screen flex">

    <!-- ── Left decorative panel ────────────────────────────────────────── -->
    <div class="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12">
      <div>
        <div class="flex items-center gap-3 mb-12">
          <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-lg">M</div>
          <span class="text-white font-semibold text-lg">Morn Soda</span>
        </div>
        <h2 class="text-white text-3xl font-normal leading-relaxed mb-4">
          Your favorite Cambodian<br>products — every month.
        </h2>
        <p class="text-white/70 text-sm leading-relaxed">
          Manage subscriptions, curate boxes, track billing, and delight thousands of customers.
        </p>
      </div>
      <!-- Feature list -->
      <div class="space-y-4">
        <div v-for="feature in features" :key="feature" class="flex items-center gap-3">
          <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">✓</div>
          <span class="text-white/80 text-sm">{{ feature }}</span>
        </div>
      </div>
    </div>

    <!-- ── Right form panel ───────────────────────────────────────────── -->
    <div class="flex-1 flex items-center justify-center p-8 bg-gray-50">
      <div class="w-full max-w-sm">

        <!-- Mobile logo -->
        <div class="flex items-center gap-2 mb-8 lg:hidden">
          <div class="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">M</div>
          <span class="font-semibold text-gray-800">Morn Soda</span>
        </div>

        <h1 class="text-xl font-semibold text-gray-800 mb-1">Sign in</h1>
        <p class="text-sm text-gray-500 mb-6">Enter your credentials to access the dashboard.</p>

        <!-- Login form -->
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              v-model="form.password"
              type="password"
              class="form-input"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" class="btn btn-primary w-full justify-center">
            Sign In
          </button>
        </form>

        <!-- Divider -->
        <div class="flex items-center gap-3 my-5">
          <div class="flex-1 h-px bg-gray-200"></div>
          <span class="text-xs text-gray-400">or try a demo account</span>
          <div class="flex-1 h-px bg-gray-200"></div>
        </div>

        <!-- Demo quick-login buttons (bypass form for school demo) -->
        <div class="grid grid-cols-2 gap-3">
          <button @click="demoLogin('admin')" class="btn btn-outline justify-center">
            🔐 Admin Demo
          </button>
          <button @click="demoLogin('subscriber')" class="btn btn-outline justify-center">
            👤 Subscriber Demo
          </button>
        </div>

        <p class="text-center text-sm text-gray-500 mt-6">
          Don't have an account?
          <RouterLink to="/register" class="text-primary hover:underline">Sign up</RouterLink>
        </p>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'

const router    = useRouter()
const authStore = useAuthStore()

const form = ref({ email: '', password: '' })

const features = [
  'Recurring subscription management',
  'Dynamic box curation per preference',
  'Automated billing & retry logic',
  'Churn analytics & win-back offers',
]

// Normal form login (TODO: connect to backend API)
function handleLogin() {
  // Demo: treat any email with "admin" as admin, else subscriber
  if (form.value.email.includes('admin')) {
    authStore.login({ name: 'Admin User', role: 'admin' })
    router.push('/admin')
  } else {
    authStore.login({ name: 'Sarah Chen', role: 'subscriber' })
    router.push('/dashboard')
  }
}

// Quick demo login buttons (school demo)
function demoLogin(role) {
  if (role === 'admin') {
    authStore.login({ name: 'Admin User', role: 'admin' })
    router.push('/admin')
  } else {
    authStore.login({ name: 'Sarah Chen', role: 'subscriber' })
    router.push('/dashboard')
  }
}
</script>
