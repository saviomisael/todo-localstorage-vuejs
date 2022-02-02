import { useStore } from 'vuex'
import TodoItem from '../TodoItem'

export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true,
    },
    mode: {
      type: String,
      default() {
        return 'LIST_UNDONE'
      },
      validator(value) {
        return value === 'LIST_UNDONE' || value === 'LIST_DONE'
      },
    },
  },
  components: {
    TodoItem,
  },
  setup({ mode, todos }) {
    const store = useStore()

    const handleCheckBoxClick = (todoId) => {
      store.dispatch('todos/toggleIsDone', todoId)
    }

    const handleDeleteClick = (todoId) => {
      store.dispatch('todos/deleteTodo', todoId)
    }

    return {
      handleCheckBoxClick,
      handleDeleteClick,
    }
  },
  computed: {
    showTodos() {
      return this.todos.length
    },
    showEmptyMessage() {
      return this.mode === 'LIST_UNDONE' && !this.todos.length
    },
  },
}
