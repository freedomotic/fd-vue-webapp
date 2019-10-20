/* eslint-disable camelcase */
import {
  Validator, install as VeeValidate
} from 'vee-validate/dist/vee-validate.minimal.esm'
import VeeValidateEn from 'vee-validate/dist/locale/en'
import { required, alpha_spaces } from 'vee-validate/dist/rules.esm'

Validator.extend('required', required)
Validator.extend('alpha_spaces', alpha_spaces)

// Merge the messages.
Validator.localize('en', VeeValidateEn)

export default ({ app, router, Vue }) => {
  Vue.use(VeeValidate)
}
