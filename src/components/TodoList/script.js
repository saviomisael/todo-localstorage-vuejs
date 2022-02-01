import TodoItem from '../TodoItem'

export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoItem,
  },
  methods: {
    handleCheckBoxClick(todoId) {
      this.$store.dispatch('todos/toggleIsDone', todoId)
    },
  },
}
