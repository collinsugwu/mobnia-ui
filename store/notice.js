export const state = () => ({
   notices: []
})
  
export const mutations = {
  SET_NOTICE(state, notice) {
    state.notices = state.notices.concat(notice);
  },
}
  
export const actions = {
  setNotice({commit}, notice) {
    notice.showing = true;
    notice.color = notice.color || 'success';
    commit('SET_NOTICE', notice);
  },
}