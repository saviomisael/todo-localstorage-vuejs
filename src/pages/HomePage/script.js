import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import TodoList from '../../components/TodoList'

export default {
  name: 'HomePage',
  components: {
    TodoList,
  },
  setup() {
    const store = useStore()

    const todosUndoneCount = computed(
      () => store.getters['todos/todosUndoneCount'],
    )
    const todosUndone = computed(() => store.getters['todos/todosUndone'])
    const todosDone = computed(() => store.getters['todos/todosDone'])

    onMounted(() => {
      store.dispatch('todos/getAllTodos')
    })

    return {
      todosUndoneCount,
      todosUndone,
      todosDone,
      addTodoLink: computed(() => ({ name: 'CreateTodo' })),
      headerVariants: computed(() => ({
        'home-page__header--flex-end': todosUndoneCount.value === 0,
      })),
    }
  },
}
