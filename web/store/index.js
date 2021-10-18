const actions = {
  onAuthStateChangedAction(state, { authUser, claims }) {
    if (!authUser) {
      state.commit('SET_UID', null)
      this.$fire.auth.signOut().then(this.$router.push('/try-it-first'))
    } else {
      console.log('user exist')
      const { uid } = authUser
      state.commit('SET_UID', uid)
    }
  },
  setUserName(state, username) {
    state.commit('SET_USERNAME', username)
  },
}

const mutations = {
  SET_UID(state, uid) {
    state.uid = uid
  },
  SET_USERNAME(state, username) {
    state.username = username
  },
}

const state = () => ({
  uid: null,
  username: '',
})

const getters = {
  getUid(state) {
    return state.uid
  },
  getUsername(state) {
    return state.username
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
