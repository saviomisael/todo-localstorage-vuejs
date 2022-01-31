export const todos = {
  namespaced: true,
  state() {
    return { todos: [] }
  },
  getters: {
    todosUndoneCount(state) {
      return state.todos.filter((x) => !x.isDone).length
    },
  },
}
