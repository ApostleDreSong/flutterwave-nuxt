// eslint-disable-next-line import/no-named-as-default
import VuexPersistence from 'vuex-persist';
import { Context } from '@nuxt/types';

export default ({ store }: Context) => {
  new VuexPersistence({
    storage: window.sessionStorage
  }).plugin(store);
};