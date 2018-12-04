import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
let musicApi = Axios.create({
  baseURL: 'https://itunes.apple.com',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    searchResults: []
  },
  mutations: {
    setResults(state, results) {
      state.searchResults = results
    }
  },
  actions: {
    search({ commit, dispatch }, query) {
      musicApi.get("search?&term=" + query)
        .then(res => {
          let data = res.data.results.map(s => {
            return { ...s, img: s.artworkUrl100.replace(/100x100/g, "300x300") }
          })
          console.log(data)
          commit('setResults', data)
        })
        .catch(err =>
          console.log('something went wrong with your API search'))
    }
  }
})
