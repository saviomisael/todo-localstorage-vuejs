import { mapGetters } from 'vuex'

import TodoList from '../../components/TodoList'

export default {
  name: 'HomePage',
  components: {
    TodoList,
  },
  computed: {
    ...mapGetters('todos', ['todosUndoneCount', 'todosUndone', 'todosDone']),
    addTodoLink() {
      return { name: 'CreateTodo' }
    },
    headerVariants() {
      return { 'home-page__header--flex-end': this.todosUndoneCount === 0 }
    },
  },
  mounted() {
    this.$store.dispatch('todos/getAllTodos')
  },
}
