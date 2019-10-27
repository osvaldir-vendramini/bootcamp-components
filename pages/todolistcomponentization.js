import BootcampInput from '~/components/bootcamp-input/bootcamp-input.vue';
import BootcampList from '~/components/bootcamp-list/bootcamp-list.vue';

export default {
  data() {
    return {
      i: 1,
      stateInput: 'default',
      itemsList: [],
      limiteItemsList: 5,
      valueInput: '',
      indexMessageError: '',
      statusItemList: {
        '1': 'checked',
        '2': 'unchecked',
      },
    }
  },
  components: {
    BootcampInput,
    BootcampList,
  },
  methods: {
    addValueInput(value) {
      this.valueInput = value;
    },
    addItemList(event) {
      event.target.reset()
      if (this.validateInputValue()) {
        this.itemsList.push({
          id: this.i++,
          text: this.valueInput,
          status: '1'
        });
      }
      event.target.reset()
    },
    validateInputValue() {
      if (this.valueInput.replace(/ /g, '').length) {
        if (this.itemsList.length > this.limiteItemsList) {
          this.errorLimiteItemsList()
          return false
        }
        return true
      }
    },
    errorLimiteItemsList() {
      this.stateInput = 'warning'
      this.indexMessageError = 'errorWarning'
    },
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    actionItemList(value) {
      if (value.action == 'delete') {
        this.deleteItemList(value)
      }
      if (value.action == 'changeState') {
        this.changeStateItemList(value)
      }
    },
    deleteItemList(value) {
      this.itemsList.map((i, k) => {
        if (i.id == value.id) {
          console.log(i);
          console.log(k);
          this.itemsList.splice(k, 1)
        }
      })
    },
    changeStateItemList(value) {
      let itemsList = this.itemsList.find((i) => {
        return i.id == value.id
      })
      itemsList.status = value.status
    },
  },
}
