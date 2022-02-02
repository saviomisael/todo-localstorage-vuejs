import {
  createTodo,
  getAllTodos,
  toggleIsDone,
  deleteTodo,
  findTodoById,
} from '../../services/localService'

export const todos = {
  namespaced: true,
  state() {
    return { todos: [], singleTodo: null, isSingleTodoNotFound: false }
  },
  mutations: {
    updateTodos(state, payload) {
      state.todos = payload
    },
    updateSingleTodo(state, payload) {
      state.singleTodo = payload
      state.isSingleTodoNotFound = false
    },
    singleTodoNotFound(state) {
      state.singleTodo = null
      state.isSingleTodoNotFound = true
    },
  },
  actions: {
    addTodo({ commit }, { description, priority }) {
      const todos = createTodo({ description, priority })

      commit('updateTodos', todos)
    },
    getAllTodos({ commit }) {
      const todos = getAllTodos()

      commit('updateTodos', todos)
    },
    toggleIsDone({ commit }, todoId) {
      const todos = toggleIsDone(todoId)

      commit('updateTodos', todos)
    },
    deleteTodo({ commit }, todoId) {
      const todos = deleteTodo(todoId)

      commit('updateTodos', todos)
    },
    findTodoById({ commit }, todoId) {
      const todo = findTodoById(todoId)

      if (todo) {
        commit('updateSingleTodo', { ...todo })
      } else {
        commit('singleTodoNotFound')
      }
    },
  },
  getters: {
    todosUndoneCount(state, { todosUndone }) {
      return todosUndone.length
    },
    todosUndone(state) {
      return state.todos.filter((x) => !x.isDone)
    },
    todosDone(state) {
      return state.todos.filter((x) => x.isDone)
    },
  },
}
