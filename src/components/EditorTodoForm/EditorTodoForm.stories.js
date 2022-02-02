import EditorTodoForm from '.'

export default {
  title: 'components/EditorTodoForm',
  component: EditorTodoForm,
}

export const Template = (args) => ({
  components: { EditorTodoForm },
  setup() {
    return { args }
  },
  template: `<EditorTodoForm v-bind="args" />`,
})
