import HomePage from '.'

export default {
  title: 'pages/HomePage',
  component: HomePage,
}

export const Template = (args) => ({
  components: { HomePage },
  setup() {
    return { args }
  },
  template: `<HomePage v-bind="args" />`,
})
