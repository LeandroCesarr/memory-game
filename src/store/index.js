import Vue from 'vue'
import Vuex from 'vuex'
import { cards } from './cards.json'
import { shuffle, duplicate } from '@/utils/index'

Vue.use(Vuex)

const state = {
  cards,
  activeCards: [],
  node: process.env.NODE_ENV
}

const getters = {
  cards: (state) => shuffle(duplicate(state.cards)),
  activeCards: (state) => state.activeCards,
  node: (state) => state.node
}

const mutations = {
}

const actions = {
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
