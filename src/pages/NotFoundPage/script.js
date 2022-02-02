import { computed } from 'vue'

export default {
  name: 'NotFoundPage',
  setup() {
    return {
      homeLink: computed(() => ({ name: 'Home' })),
    }
  },
}
