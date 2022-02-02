import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import EditorTodoForm from '../../components/EditorTodoForm'

export default {
  name: 'CreateTodoPage',
  components: {
    EditorTodoForm,
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const handleAddTodoSubmit = ({ description, priority }) => {
      store.dispatch('todos/addTodo', { description, priority })
      router.push({ name: 'Home' })
    }

    return {
      handleAddTodoSubmit,
    }
  },
}
