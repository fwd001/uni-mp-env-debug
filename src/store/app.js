const state = {
  apiEnv: "stg", // 服务端环境prd 、 pre、 stg 、
};

// getters
const getters = {};

// mutations
const mutations = {
  saveApiEnv(state, environment) {
    state.apiEnv = environment;
  },
};

// actions
const actions = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
