import { computed } from 'vue'

import CheckBoxIcon from '../../assets/images/check_box.svg'
import CheckBoxIconOutline from '../../assets/images/check_box_outline.svg'
import EditIcon from '../../assets/images/edit.svg'
import DeleteIcon from '../../assets/images/delete.svg'

export default {
  name: 'TodoItem',
  emits: ['check-box-click', 'delete-click'],
  props: {
    isDone: {
      type: Boolean,
      required: false,
      default() {
        return false
      },
    },
    priority: {
      type: String,
      required: false,
      default() {
        return 'low'
      },
      validator(value) {
        return ['high', 'medium', 'low'].includes(value)
      },
    },
    description: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup({ isDone, priority, id }, { emit }) {
    const handleCheckBoxClick = () => {
      emit('check-box-click', id)
    }

    const handleDeleteClick = () => {
      emit('delete-click', id)
    }

    return {
      checkBoxImage: computed(() =>
        isDone ? CheckBoxIcon : CheckBoxIconOutline,
      ),
      editIcon: computed(() => EditIcon),
      deleteIcon: computed(() => DeleteIcon),
      todoClassVariants: computed(() => ({
        'todo-item--high': priority === 'high',
        'todo-item--medium': priority === 'medium',
        'todo-item--low': priority === 'low',
        'todo-item--done': isDone,
      })),
      editTodoLink: computed(() => ({
        name: 'UpdateTodo',
        params: { todoId: id },
      })),
      handleCheckBoxClick,
      handleDeleteClick,
    }
  },
}
