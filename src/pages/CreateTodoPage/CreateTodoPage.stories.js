import CreateTodoPage from '.'

export default {
  title: 'pages/CreateTodoPage',
  component: CreateTodoPage,
}

export const Template = (args) => ({
  components: { CreateTodoPage },
  setup() {
    return { args }
  },
  template: `<CreateTodoPage v-bind="args" />`,
})
