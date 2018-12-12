import { noop } from 'quasar-framework'

export default {
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({submitting: false}),
  computed: {
    isSubmitted() {
      return this.submitting
    },
    isInvalid() {
      return Object.keys(this.fields).some((key) => {
        const field = this.fields[key]
        return field.invalid
      })
    }
  },
  methods: {
    invalidIcon(field) {
      return [
        {icon: this.errors.has(field) ? 'warning' : null}
      ]
    },
    toggleSubmit(callback = noop, ...args) {
      if (!this.isInvalid) {
        this.submitting = true
        // eslint-disable-next-line standard/no-callback-literal
        callback(() => { this.submitting = false }, ...args)
      }
    }
  }
}
