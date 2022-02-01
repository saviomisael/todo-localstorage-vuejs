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
  computed: {
    showTodos() {
      return this.todos.length
    },
    showEmptyMessage() {
      return this.mode === 'LIST_UNDONE' && !this.todos.length
    },
  },
  methods: {
    handleCheckBoxClick(todoId) {
      this.$store.dispatch('todos/toggleIsDone', todoId)
    },
    handleDeleteClick(todoId) {
      this.$store.dispatch('todos/deleteTodo', todoId)
    },
  },
}
