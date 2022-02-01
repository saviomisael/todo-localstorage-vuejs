import AddTodoForm from '../../components/AddTodoForm'

export default {
  name: 'CreateTodoPage',
  components: {
    AddTodoForm,
  },
  methods: {
    handleAddTodoSubmit({ description, priority }) {
      this.$store.dispatch('todos/addTodo', { description, priority })
      this.$router.push({ name: 'Home' })
    },
  },
}
