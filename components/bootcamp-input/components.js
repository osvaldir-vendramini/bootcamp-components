export default {
  name: 'bootcamp-input',
  data() {
    return {
      txtPlaceholder: '',
      valueInput: '',
      errorMessage: '',
    }
  },
  mounted() {
    this.txtPlaceholder = this.translations.placeholder
  },
  props: {
    typeInput: {
      type: String,
      default: 'text',
      required: false,
    },
    createButtton: {
      type: Boolean,
      default: false,
      required: false,
    },
    errorMessageBehavior: {
      type: Boolean,
      default: false,
      required: false,
    },
    indexMessageError:{
      type: String,
      default: '',
      required: false,
    },
    state: {
      type: String,
      default: 'default',
      validator: value => {
        return value.match(/(default|error|warning|success|)/);
      },
    },
    translations: {
      type: Object,
      required: true,
      validator: function (obj) {
        const missingProperties = [
          'label',
          'placeholder',
          'errorWarning',
          'errorAlert',
        ].filter((property) => !obj.hasOwnProperty(property));
        return missingProperties.length === 0;
      },
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
  },
  watch: {
    state(newValue, _) {
      if (this.getStateError()) {
        this.getMessageError()
      }
    },
    valueInput(newValue, _) {
      this.$emit('valueInput', newValue)
    },
  },
  methods: {
    getStateError() {
      return ['error', 'warning'].includes(this.state)
    },
    getMessageError() {
      if (this.errorMessageBehavior) {
        this.valueInput = ''
        this.txtPlaceholder = this.translations[this.indexMessageError]
      } else {
        this.valueInput = ''
        this.errorMessage = this.translations[this.indexMessageError]
      }
    },
  },
  computed: {
    showButtonInput() {
      return this.createButtton && this.valueInput.length > 0
    },
  },
}
