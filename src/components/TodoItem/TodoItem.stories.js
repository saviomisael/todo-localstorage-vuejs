import TodoItem from '.'

export default {
  title: 'components/TodoItem',
  component: TodoItem,
  args: {
    description: 'Implement Vuex',
  },
}

const Template = (args) => ({
  components: { TodoItem },
  setup() {
    return { args }
  },
  template: `<TodoItem v-bind="args" />`,
})

export const Default = Template.bind({})

export const LowPrority = Template.bind({})

LowPrority.args = {
  priority: 'low',
}

export const MediumPriority = Template.bind({})

MediumPriority.args = {
  priority: 'medium',
}

export const HighPriority = Template.bind({})

HighPriority.args = {
  priority: 'high',
}

export const Done = Template.bind({})

Done.args = {
  isDone: true,
}
