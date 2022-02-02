import { computed, reactive, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { minLength, maxLength, required } from '@vuelidate/validators'
import { oneOf } from '../../validators/oneOf'

export default {
  name: 'EditorTodoForm',
  emits: ['editor-todo-submit'],
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
      validator(value) {
        return oneOf(['low', 'medium', 'high'])(value)
      },
    },
    mode: {
      type: String,
      required: false,
      default() {
        return 'CREATE'
      },
      validator(value) {
        return value === 'CREATE' || value === 'EDIT'
      },
    },
  },
  setup({ description, priority, mode }, { emit }) {
    const isFormSubmitted = ref(false)

    const formData = reactive({
      descriptionField: description,
      priorityField: priority,
    })

    const formRules = computed(() => ({
      descriptionField: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(180),
      },
      priorityField: {
        oneOf: oneOf(['low', 'medium', 'high']),
      },
    }))

    const v$ = useVuelidate(formRules, formData)

    const handleSubmit = async () => {
      isFormSubmitted.value = true

      const isFormValid = await v$.value.$validate()

      if (!isFormValid) {
        isFormSubmitted.value = false

        return
      }

      emit('editor-todo-submit', {
        description: formData.descriptionField,
        priority: formData.priorityField,
      })
    }

    const descriptionErrorMessage = computed(() => {
      if (!v$.value.descriptionField.$errors.length) return ''

      const { $validator } = v$.value.descriptionField.$errors[0]

      const bindingMessages = {
        required: 'A descrição é um campo obrigatório.',
        minLength: 'A descrição deve conter pelo menos 3 caracteres.',
        maxLength: 'A descrição só pode conter no máximo 180 caracteres.',
      }

      return bindingMessages[$validator]
    })

    const priorityErrorMessage = computed(() =>
      !v$.value.priorityField.$errors.length ? '' : 'Selecione uma prioridade.',
    )

    const homeLink = computed(() => ({ name: 'Home' }))

    const btnSubmitCaption = computed(() =>
      mode === 'CREATE' ? 'Criar Nova Tarefa' : 'Atualizar Tarefa',
    )

    return {
      v$,
      homeLink,
      formData,
      handleSubmit,
      descriptionErrorMessage,
      priorityErrorMessage,
      isFormSubmitted,
      btnSubmitCaption,
    }
  },
}
