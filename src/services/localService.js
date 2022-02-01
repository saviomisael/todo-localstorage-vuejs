import { v4 } from 'uuid'

const localStorageKey = 'TODO_APP_VUE'

export const getAllTodos = () => {
  const todosData = localStorage.getItem(localStorageKey)

  if (!todosData) return []

  const { todos } = JSON.parse(todosData)

  return todos
}

export const createTodo = ({ description, priority }) => {
  const allTodos = getAllTodos()

  allTodos.push({ description, priority, id: v4(), isDone: false })

  const data = JSON.stringify({ todos: allTodos })

  localStorage.setItem(localStorageKey, data)

  return allTodos
}
