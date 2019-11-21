import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import session from './session';
import { noop, isDEV } from 'src/utils';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [isDEV ? createLogger() : noop],
    modules: {
      session
    }
  });

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./session'], () => {
      const session = require('./session').default;
      Store.hotUpdate({ modules: { session } });
    });
  }

  return Store;
}
