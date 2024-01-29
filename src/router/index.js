import { createRouter, createWebHistory } from 'vue-router'
import com_left_1Vue from '@/components/com_left_1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'com1',
      component: com_left_1Vue
    }
  ]
})

export default router
