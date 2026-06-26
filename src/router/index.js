import { createRouter, createWebHistory } from 'vue-router'

// Layouts — wrap pages with sidebar + topbar
import AdminLayout      from '@/layouts/AdminLayout.vue'
import SubscriberLayout from '@/layouts/SubscriberLayout.vue'

// Public pages (no sidebar)
import HomePage     from '@/views/public/HomePage.vue'
import LoginPage    from '@/views/public/LoginPage.vue'
import RegisterPage from '@/views/public/RegisterPage.vue'

// Subscriber pages (inside SubscriberLayout)
import SubscriberDashboard from '@/views/subscriber/DashboardPage.vue'
import MyBoxPage           from '@/views/subscriber/MyBoxPage.vue'
import ProfilePage         from '@/views/subscriber/ProfilePage.vue'
import SubscriptionPage    from '@/views/subscriber/SubscriptionPage.vue'
import PaymentHistoryPage  from '@/views/subscriber/PaymentHistoryPage.vue'

// Admin pages (inside AdminLayout)
import AdminDashboard     from '@/views/admin/DashboardPage.vue'
import SubscriberListPage from '@/views/admin/SubscriberListPage.vue'
import PlansPage          from '@/views/admin/PlansPage.vue'
import RolesPage          from '@/views/admin/RolesPage.vue'
import BoxCurationPage    from '@/views/admin/BoxCurationPage.vue'
import BillingPage        from '@/views/admin/BillingPage.vue'
import InventoryPage      from '@/views/admin/InventoryPage.vue'
import CouponPage         from '@/views/admin/CouponPage.vue'
import AnalyticsPage      from '@/views/admin/AnalyticsPage.vue'
import ActivityLogPage    from '@/views/admin/ActivityLogPage.vue'

const routes = [
  // ── Public routes (no sidebar/topbar) ────────────────────────────────────
  { path: '/',         component: HomePage     },
  { path: '/login',    component: LoginPage    },
  { path: '/register', component: RegisterPage },

  // ── Subscriber routes (wrapped in SubscriberLayout) ─────────────────────
  {
    path: '/',
    component: SubscriberLayout,
    children: [
      { path: 'dashboard',       component: SubscriberDashboard, meta: { title: 'Dashboard'        } },
      { path: 'my-box',          component: MyBoxPage,           meta: { title: 'My Box'           } },
      { path: 'profile',         component: ProfilePage,          meta: { title: 'My Profile'       } },
      { path: 'subscription',    component: SubscriptionPage,     meta: { title: 'My Subscription'  } },
      { path: 'payment-history', component: PaymentHistoryPage,   meta: { title: 'Payment History'  } },
    ]
  },

  // ── Admin routes (wrapped in AdminLayout) ────────────────────────────────
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: '',            component: AdminDashboard,     meta: { title: 'Dashboard'          } },
      { path: 'subscribers', component: SubscriberListPage, meta: { title: 'Subscribers'        } },
      { path: 'plans',       component: PlansPage,          meta: { title: 'Subscription Plans' } },
      { path: 'roles',       component: RolesPage,          meta: { title: 'Roles & Permissions'} },
      { path: 'box-curation',component: BoxCurationPage,    meta: { title: 'Box Curation'       } },
      { path: 'billing',     component: BillingPage,        meta: { title: 'Billing'            } },
      { path: 'inventory',   component: InventoryPage,      meta: { title: 'Inventory'          } },
      { path: 'coupons',     component: CouponPage,         meta: { title: 'Coupons & Gifts'    } },
      { path: 'analytics',   component: AnalyticsPage,      meta: { title: 'Analytics'          } },
      { path: 'activity-log',component: ActivityLogPage,    meta: { title: 'Activity Log'       } },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
