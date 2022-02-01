import AddTodoForm from '.'

export default {
  title: 'components/AddTodoForm',
  component: AddTodoForm,
}

export const Template = (args) => ({
  components: { AddTodoForm },
  setup() {
    return { args }
  },
  template: `<AddTodoForm v-bind="args" />`,
})
