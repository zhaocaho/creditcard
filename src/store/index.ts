import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false
  },
  mutations: {
    // 改变loading状态，
    setLoadingStatus(state, status) {
      state.loading = status
    }
  },
  actions: {},
  modules: {}
})
