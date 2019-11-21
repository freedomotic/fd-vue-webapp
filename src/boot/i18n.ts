import VueI18n from 'vue-i18n';
import messages from 'src/i18n';
import { VueConstructor } from 'vue';

export default ({ app, Vue }: { Vue: VueConstructor; app: any }) => {
  Vue.use(VueI18n);

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
  });
};
