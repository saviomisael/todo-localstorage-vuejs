import { useStore } from 'vuex'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import EditorTodoForm from '../../components/EditorTodoForm'

export default {
  name: 'UpdateTodoPage',
  components: {
    EditorTodoForm,
  },
  props: {
    todoId: {
      type: String,
      required: true,
    },
  },
  setup({ todoId }) {
    const store = useStore()
    const router = useRouter()

    store.dispatch('todos/findTodoById', todoId)

    const { singleTodo, isSingleTodoNotFound } = store.state.todos

    const handleEditTodoSubmit = ({ description, priority }) => {
      store.dispatch('todos/updateTodoById', {
        todoId,
        description,
        priority,
      })
      router.push({ name: 'Home' })
    }

    onMounted(() => {
      if (isSingleTodoNotFound) {
        router.replace({ name: 'Home' })
      }
    })

    return {
      singleTodo,
      handleEditTodoSubmit,
    }
  },
}
