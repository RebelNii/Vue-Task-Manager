import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTodo from '../views/AddTodo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/addTodos',
    name: 'AddTodo',
    component: AddTodo,
    meta: {
      title: 'AddTodo'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from,next) => {
  document.title = `${to.meta.title} | Covid App`;
  next()
})

export default router
