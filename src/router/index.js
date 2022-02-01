import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage'
import CreateTodoPage from '../pages/CreateTodoPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/create-todo',
    name: 'CreateTodo',
    component: CreateTodoPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
