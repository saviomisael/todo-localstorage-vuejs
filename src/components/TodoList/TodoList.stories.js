import TodoList from '.'

export default {
  title: 'components/TodoList',
  component: TodoList,
  args: {
    todos: [],
  },
}

const Template = (args) => ({
  components: { TodoList },
  setup() {
    return { args }
  },
  template: `<TodoList v-bind="args" />`,
})

export const Empty = Template.bind({})

export const WithContent = Template.bind({})

WithContent.args = {
  todos: [
    {
      description: 'Implementar Vuex',
      isDone: false,
      priority: 'medium',
      id: '1',
    },
    {
      description: 'Implementar Router',
      isDone: false,
      priority: 'low',
      id: '2',
    },
    {
      description: 'Implementar Testes Unitários',
      isDone: true,
      priority: 'high',
      id: '3',
    },
    {
      description: 'Utilizar LocalStorage',
      isDone: false,
      priority: 'high',
      id: '3',
    },
  ],
}
