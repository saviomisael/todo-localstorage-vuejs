import useVuelidate from '@vuelidate/core'
import { minLength, maxLength, required } from '@vuelidate/validators'
import { oneOf } from '../../validators/oneOf'

export default {
  name: 'EditorTodoForm',
  setup() {
    return {
      v$: useVuelidate(),
    }
  },
  emits: ['add-todo-submit'],
  props: {
    description: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
    priority: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      formData: {
        description: this.description,
        priority: this.priority,
      },
      isFormSubmitted: false,
    }
  },
  validations() {
    return {
      formData: {
        description: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(180),
        },
        priority: {
          oneOf: oneOf(['low', 'medium', 'high']),
        },
      },
    }
  },
  computed: {
    descriptionErrorMessage() {
      if (!this.v$.formData.description.$errors.length) return ''

      const { $validator } = this.v$.formData.description.$errors[0]

      const bindingMessages = {
        required: 'A descrição é um campo obrigatório.',
        minLength: 'A descrição deve conter pelo menos 3 caracteres.',
        maxLength: 'A descrição só pode conter no máximo 180 caracteres.',
      }

      return bindingMessages[$validator]
    },
    priorityErrorMessage() {
      return !this.v$.formData.priority.$errors.length
        ? ''
        : 'Selecione uma prioridade.'
    },
    homeLink() {
      return { name: 'Home' }
    },
  },
  methods: {
    async handleSubmit() {
      this.isFormSubmitted = true

      const isFormValid = await this.v$.$validate()

      if (!isFormValid) {
        this.isFormSubmitted = false

        return
      }

      this.$emit('add-todo-submit', { ...this.formData })
    },
  },
}
