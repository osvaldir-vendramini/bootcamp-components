export default {
  name: 'bootcamp-list',
  data() {
    return {
      actionButton: {
        action: '',
        id: '',
        status: '',
      },
    }
  },
  props: {
    itemsList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    actionItemList(action, id, status) {
      this.actionButton.action = action
      this.actionButton.id = id
      this.actionButton.status = status
      this.$emit('actionItemList', this.actionButton)
    },
  }
}
