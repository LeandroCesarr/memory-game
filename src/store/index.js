import Vue from 'vue'
import Vuex from 'vuex'
import { cards } from './cards.json'
import { shuffle, duplicate } from '@/utils/index'

Vue.use(Vuex)

const getResult = (arr) => (arr[0].name === arr[1].name)

const state = {
  cards: duplicate(cards.map(card => ({ ...card, flip: false, valid: false }))),
  points: 0,
  node: process.env.NODE_ENV
}

const getters = {
  cards: (state) => shuffle(state.cards),
  node: (state) => state.node,
  getCard: (state) => (cardSlug) => state.cards.find(card => card.slug === cardSlug),
  flippedCards: (state) => state.cards.filter(card => card.flip && !card.valid),
  points: (state) => state.points
}

const mutations = {
  flipCards (state, cards) {
    state.cards.forEach(card => {
      const cd = cards.find(cds => cds.slug === card.slug)
      if (cd && !cd.valid) {
        card.flip = !card.flip
      }
    })
  },
  validateCards (state, cards) {
    state.cards.forEach(card => {
      const cd = cards.find(cds => cds.slug === card.slug)
      if (cd) {
        card.valid = !card.valid
      }
    })
  },
  incrementPoints (state) {
    state.points += 1
  }
}

const actions = {
  move ({ commit, getters }, card) {
    let activeCards = getters.flippedCards

    if (activeCards.length === 2) {
      alert('irregular movement')
    } else if (activeCards.length === 1 && activeCards[0].slug === card.slug) {
      alert('irregular movement')
    } else {
      commit('flipCards', [card])
      activeCards = getters.flippedCards
      setTimeout(() => {
        if (activeCards.length === 2) {
          if (getResult(activeCards)) {
            commit('incrementPoints')
            commit('validateCards', activeCards)
          } else {
            commit('flipCards', activeCards)
          }
        }
      }, 600)
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
