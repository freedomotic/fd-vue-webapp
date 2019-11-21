/* eslint-disable camelcase */
import { VueConstructor } from 'vue';
import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider
} from 'vee-validate';
import VeeValidateEn from 'vee-validate/dist/locale/en.json';
import { required, alpha_spaces } from 'vee-validate/dist/rules';

extend('required', required);
extend('alpha_spaces', alpha_spaces);

// Merge the messages.
localize('en', VeeValidateEn);

export default ({ Vue }: { Vue: VueConstructor }) => {
  Vue.component('ValidationObserver', ValidationObserver);
  Vue.component('ValidationProvider', ValidationProvider);
};
