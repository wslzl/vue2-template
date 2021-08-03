const state = {
  username: '',
  token: localStorage.getItem('token'),
};

const getters = {
  username: stat => stat.username,
};

const mutations = {
  SET_USERNAME: (stat, username) => {
    stat.username = username;
  },
};

export default {
  //   namespaced: true,
  state,
  getters,
  mutations,
};
