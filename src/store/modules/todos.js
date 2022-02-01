import {
  createTodo,
  getAllTodos,
  toggleIsDone,
  deleteTodo,
} from '../../services/localService'

export const todos = {
  namespaced: true,
  state() {
    return { todos: [] }
  },
  mutations: {
    updateTodos(state, payload) {
      state.todos = payload
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
