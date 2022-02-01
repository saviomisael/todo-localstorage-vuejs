import CheckBoxIcon from '../../assets/images/check_box.svg'
import CheckBoxIconOutline from '../../assets/images/check_box_outline.svg'
import EditIcon from '../../assets/images/edit.svg'
import DeleteIcon from '../../assets/images/delete.svg'

export default {
  name: 'TodoItem',
  emits: ['check-box-click'],
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
  computed: {
    checkBoxImage() {
      return this.isDone ? CheckBoxIcon : CheckBoxIconOutline
    },
    editIcon() {
      return EditIcon
    },
    deleteIcon() {
      return DeleteIcon
    },
    todoClassVariants() {
      return {
        'todo-item--high': this.priority === 'high',
        'todo-item--medium': this.priority === 'medium',
        'todo-item--low': this.priority === 'low',
        'todo-item--done': this.isDone,
      }
    },
  },
  methods: {
    handleCheckBoxClick() {
      this.emit('check-box-click', this.id)
    },
  },
}
