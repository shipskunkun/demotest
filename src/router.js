import Vue from 'vue'
import Router from 'vue-router'
import slot from './pages/slot.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slot',
      component: () => import('./pages/slot.vue')
    }
  ]
})
