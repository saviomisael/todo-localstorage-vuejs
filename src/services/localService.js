import { v4 } from 'uuid'

const localStorageKey = 'TODO_APP_VUE'

const persistTodos = ([...todos]) => {
  const data = JSON.stringify({ todos })

  localStorage.setItem(localStorageKey, data)

  return todos
}

export const getAllTodos = () => {
  const todosData = localStorage.getItem(localStorageKey)

  if (!todosData) return []

  const { todos } = JSON.parse(todosData)

  return todos
}

export const createTodo = ({ description, priority }) => {
  const allTodos = getAllTodos()

  allTodos.push({ description, priority, id: v4(), isDone: false })

  return persistTodos(allTodos)
}

export const toggleIsDone = (todoId) => {
  let allTodos = getAllTodos()

  allTodos = allTodos.map((x) => {
    if (x.id === todoId) {
      x.isDone = !x.isDone
    }

    return x
  })

  return persistTodos(allTodos)
}

export const deleteTodo = (todoId) => {
  let allTodos = getAllTodos()

  allTodos = allTodos.filter((x) => x.id !== todoId)

  return persistTodos(allTodos)
}

export const findTodoById = (todoId) => {
  return getAllTodos().find((x) => x.id === todoId)
}

export const updateTodo = ({ description, priority }, todoId) => {
  let allTodos = getAllTodos()

  allTodos = allTodos.map((x) => {
    if (x.id === todoId) {
      x = { ...x, description, priority }
    }

    return x
  })

  return persistTodos(allTodos)
}
