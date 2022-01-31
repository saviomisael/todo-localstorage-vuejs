import { createStore } from 'vuex'
import { todos } from './modules/todos'

const store = createStore({
  modules: {
    todos: { ...todos },
  },
})

export default store
