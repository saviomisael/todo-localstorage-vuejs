import EditorTodoForm from '../../components/EditorTodoForm'

export default {
  name: 'CreateTodoPage',
  components: {
    EditorTodoForm,
  },
  methods: {
    handleAddTodoSubmit({ description, priority }) {
      this.$store.dispatch('todos/addTodo', { description, priority })
      this.$router.push({ name: 'Home' })
    },
  },
}
