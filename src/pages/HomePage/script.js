import { mapGetters } from 'vuex'

import TodoList from '../../components/TodoList'

export default {
  name: 'HomePage',
  components: {
    TodoList,
  },
  computed: {
    ...mapGetters('todos', ['todosUndoneCount', 'todosUndone']),
    addTodoLink() {
      return { name: 'Home' }
    },
    headerVariants() {
      return { 'home-page__header--flex-end': this.todosUndoneCount === 0 }
    },
  },
}
