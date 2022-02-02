import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../pages/HomePage'
import CreateTodoPage from '../pages/CreateTodoPage'
import UpdateTodoPage from '../pages/UpdateTodoPage'

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
  {
    path: '/edit-todo/:todoId',
    name: 'UpdateTodo',
    component: UpdateTodoPage,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
