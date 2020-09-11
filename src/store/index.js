import Vue from 'vue'
import Vuex from 'vuex'
import pageEnum from '@/enums/page'
import { cards } from './cards.json'
import { shuffle, duplicate } from '@/utils/index'

Vue.use(Vuex)

const getResult = (arr) => (arr[0].name === arr[1].name)

const getDefaultData = () => ({
  cards: duplicate(cards.map(card => ({
    ...card,
    flip: false,
    valid: false,
    error: false
  }))),
  points: 0,
  plays: 0,
  time: 60,
  timer: null
})

const getDefaultState = () => ({
  ...getDefaultData(),
  node: 'development',
  page: pageEnum.START
})

const getters = {
  cards: (state) => shuffle(state.cards),
  node: (state) => state.node,
  getCard: (state) => (cardSlug) => state.cards.find(card => card.slug === cardSlug),
  flippedCards: (state) => state.cards.filter(card => card.flip && !card.valid),
  points: (state) => state.points,
  plays: (state) => state.plays,
  page: (state) => state.page,
  time: (state) => state.time,
  timer: (state) => state.timer
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
  },
  incrementPlays (state) {
    state.plays += 1
  },
  startTime (state) {
    state.timer = setInterval(() => {
      if (state.time > 0) {
        state.time -= 1
      } else {
        clearInterval(state.timer)
      }
    }, 1000)
  },
  breakTimer (state) {
    clearInterval(state.timer)
  },
  changeErrorCard (state, card) {
    const foundCard = state.cards.find((cd) => cd.slug === card.slug)
    foundCard.error = !foundCard.error
  },
  changePage (state, page) {
    state.page = page
  },
  reset (state) {
    clearInterval(state.timer)

    const s = getDefaultState()
    Object.keys(s).forEach((key) => { state[key] = s[key] })
  },
  resetData (state) {
    clearInterval(state.timer)

    const s = getDefaultData()
    Object.keys(s).forEach((key) => { state[key] = s[key] })
  }
}

const actions = {
  move ({ commit, getters, dispatch }, card) {
    let activeCards = getters.flippedCards

    if (activeCards.length === 2) {
      dispatch('irregularMovement', card)
    } else if (activeCards.length === 1 && activeCards[0].slug === card.slug) {
      dispatch('irregularMovement', card)
    } else {
      commit('flipCards', [card])
      activeCards = getters.flippedCards
      setTimeout(() => {
        if (activeCards.length === 2) {
          commit('incrementPlays')

          if (getResult(activeCards)) {
            commit('incrementPoints')
            commit('validateCards', activeCards)
          } else {
            commit('flipCards', activeCards)
          }
        }
      }, 600)
    }
  },
  irregularMovement ({ commit }, card) {
    commit('changeErrorCard', card)

    setTimeout(() => {
      commit('changeErrorCard', card)
    }, 2000)
  }
}

export default new Vuex.Store({
  state: getDefaultState(),
  getters,
  mutations,
  actions
})
