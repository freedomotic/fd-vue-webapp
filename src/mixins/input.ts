import { Component, Vue } from 'vue-property-decorator'

@Component
export default class InputMixin extends Vue {
  submitting = false

  protected get isSubmitted() {
    return this.submitting
  }
}
