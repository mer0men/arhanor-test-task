import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiKey: '43a884ef1020578dccee329a9c3f784085edb2f36ce9227a6bd82371dcfbe0c2',
    cryptList: []
  },
  mutations: {
    ADD_CRYPT: (state, payload) => {
      state.cryptList.push(...payload)
    }
  },
  actions: {
    GET_CRYPT: async (context, payload) => {
      let data = await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${payload.count}&tsym=RUB&page=${payload.page}&api_key=${context.state.apiKey}`)
      console.log(payload)
      if (data.status === 200) {
        payload.page === 0
          ? context.commit('ADD_CRYPT', data.data.Data.sort((a, b) => {
            if (a.RAW.RUB.PRICE > b.RAW.RUB.PRICE) { return -1 }

            if (a.RAW.RUB.PRICE < b.RAW.RUB.PRICE) { return 1 }

            if (a.RAW.RUB.PRICE === b.RAW.RUB.PRICE) { return 0 }
          }))
          : context.commit('ADD_CRYPT', data.data.Data)
      }
    }
  }
})
