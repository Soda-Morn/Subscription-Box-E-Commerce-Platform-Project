import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// useAuthStore — stores who is logged in
// Usage: const auth = useAuthStore()
//        auth.login({ name: 'Admin', role: 'admin' })
//        auth.isLoggedIn  → true/false
//        auth.isAdmin     → true/false
export const useAuthStore = defineStore('auth', () => {
  // Current user — null means not logged in
  const user = ref(null)

  // Is someone logged in?
  const isLoggedIn = computed(() => user.value !== null)

  // Is the logged-in user an admin?
  const isAdmin = computed(() => user.value?.role === 'admin')

  // Is the logged-in user a subscriber?
  const isSubscriber = computed(() => user.value?.role === 'subscriber')

  // Log in — pass an object like { name: 'Sarah', role: 'subscriber' }
  function login(userData) {
    user.value = userData
  }

  // Log out — clears the user
  function logout() {
    user.value = null
  }

  return { user, isLoggedIn, isAdmin, isSubscriber, login, logout }
})
