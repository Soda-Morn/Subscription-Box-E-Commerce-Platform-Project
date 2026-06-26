<template>
  <div class="min-h-screen bg-white">

    <!-- ── Header ─────────────────────────────────────────────────────── -->
    <header class="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div class="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">M</div>
          <span class="font-semibold text-gray-800">Morn Soda</span>
        </div>
        <nav class="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#how" class="hover:text-primary">How It Works</a>
          <a href="#plans" class="hover:text-primary">Plans</a>
          <a href="#about" class="hover:text-primary">About</a>
        </nav>
        <div class="flex items-center gap-3">
          <RouterLink to="/login" class="btn btn-outline btn-sm">Log In</RouterLink>
          <RouterLink to="/register" class="btn btn-primary btn-sm">Get Started</RouterLink>
        </div>
      </div>
    </header>

    <!-- ── Hero ────────────────────────────────────────────────────────── -->
    <section class="bg-primary text-white py-20 px-6 text-center">
      <div class="max-w-2xl mx-auto">
        <span class="inline-block text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
          Subscription Box Platform
        </span>
        <h1 class="text-4xl font-normal leading-tight mb-4">
          Discover Cambodia,<br>delivered to your door.
        </h1>
        <p class="text-white/70 text-base mb-8">
          Handpicked Cambodian teas, snacks, and artisan goods — curated every month to match your taste.
        </p>
        <div class="flex items-center justify-center gap-3">
          <RouterLink to="/register" class="bg-white text-primary font-semibold px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
            Start My Subscription
          </RouterLink>
          <RouterLink to="/login" class="border border-white/30 text-white px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
            Sign In
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ── Stats bar ───────────────────────────────────────────────────── -->
    <section class="bg-gray-50 border-b border-gray-200 py-6">
      <div class="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-gray-200 text-center px-6">
        <div v-for="stat in stats" :key="stat.label" class="px-4">
          <div class="text-2xl font-bold text-gray-800">{{ stat.value }}</div>
          <div class="text-sm text-gray-500">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- ── Plans ───────────────────────────────────────────────────────── -->
    <section id="plans" class="py-16 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-normal text-gray-800 mb-2">Choose Your Box</h2>
          <p class="text-gray-500 text-sm">Flexible plans for every taste and budget.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="plan in plans" :key="plan.name"
            class="card p-6 text-center"
            :class="plan.highlight ? 'border-2 border-primary' : ''">
            <div v-if="plan.highlight" class="badge badge-primary mb-3">Most Popular</div>
            <div class="text-4xl mb-3">{{ plan.icon }}</div>
            <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ plan.name }}</h3>
            <p class="text-2xl font-bold text-primary mb-1">${{ plan.price }}<span class="text-sm font-normal text-gray-400">/month</span></p>
            <p class="text-sm text-gray-500 mb-5">{{ plan.desc }}</p>
            <ul class="text-left text-sm text-gray-600 space-y-2 mb-6">
              <li v-for="f in plan.features" :key="f" class="flex items-center gap-2">
                <span class="text-success">✓</span> {{ f }}
              </li>
            </ul>
            <RouterLink to="/register" class="btn w-full justify-center"
              :class="plan.highlight ? 'btn-primary' : 'btn-outline'">
              Get Started
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Footer ─────────────────────────────────────────────────────── -->
    <footer class="text-center py-6 border-t border-gray-200 text-sm text-gray-400">
      © 2026 Morn Soda Subscription Box — Built with Vue 3 + Tailwind CSS
    </footer>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const stats = [
  { value: '1,284', label: 'Happy Subscribers' },
  { value: '48',    label: 'Products Per Box'  },
  { value: '4.9★',  label: 'Average Rating'    },
]

const plans = [
  {
    name: 'Basic Box', icon: '🌱', price: 15, highlight: false,
    desc: 'Perfect for trying Cambodian products.',
    features: ['4 products/month', 'Free shipping', 'Pause anytime'],
  },
  {
    name: 'Standard Box', icon: '📦', price: 29, highlight: true,
    desc: 'Our most popular box for enthusiasts.',
    features: ['8 products/month', 'Free shipping', 'Pause & skip', 'Exclusive recipes'],
  },
  {
    name: 'Premium Box', icon: '👑', price: 45, highlight: false,
    desc: 'The full Cambodian experience.',
    features: ['14 products/month', 'Free express shipping', 'Priority curation', 'Gift wrapping'],
  },
]
</script>
