import EditorTodoForm from '.'

export default {
  title: 'components/EditorTodoForm',
  component: EditorTodoForm,
}

const Template = (args) => ({
  components: { EditorTodoForm },
  setup() {
    return { args }
  },
  template: `<EditorTodoForm v-bind="args" />`,
})

export const Default = Template.bind({})

export const WhenModeIsEdit = Template.bind({})

WhenModeIsEdit.args = {
  mode: 'EDIT',
}
