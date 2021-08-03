import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from 'vuex-persistedstate';
import secureLS from 'secure-ls';
import LoginModule from './modules/login.js';

Vue.use(Vuex);

const ls = new secureLS({
  encodingType: 'aes',
  isCompression: false,
  encryptionSecret: 'oldStore',
});

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { LoginModule },
  plugins: [
    persistedState({
      key: 'oldStore',
      storage: {
        setItem: (key, value) => ls.set(key, value),
        getItem: key => ls.get(key),
        removeItem: key => ls.remove(key),
      },
    }),
  ],
});
